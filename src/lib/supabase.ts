import { createClient, type SupabaseClient } from '@supabase/supabase-js';

export interface B2COrderRecord {
  id?: string;
  created_at?: string;
  city: string;
  customer_name: string;
  whatsapp: string;
  pincode: string;
  box_size: string;
  reservation_paid_inr: number;
  total_box_price_inr: number;
  balance_due_inr: number;
  payment_status: string;
  razorpay_payment_id?: string | null;
}

export interface WholesaleInquiryRecord {
  id?: string;
  created_at?: string;
  company_name: string;
  buyer_type: string;
  commodity: string;
  estimated_tonnage: string;
  whatsapp: string;
  email: string;
  status?: string;
}

export interface FarmerRegistrationRecord {
  id?: string;
  created_at?: string;
  farmer_or_fpo_name: string;
  entity_type: string;
  village_district_state: string;
  land_size_or_members?: string;
  crops_grown: string;
  whatsapp: string;
  farming_practice: string;
  onboarding_status?: string;
}

const SUPABASE_URL = (
  import.meta.env.EXPO_PUBLIC_SUPABASE_URL ||
  import.meta.env.VITE_SUPABASE_URL ||
  ''
).trim();

const SUPABASE_ANON_KEY = (
  import.meta.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ||
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  ''
).trim();

export const supabase: SupabaseClient | null =
  SUPABASE_URL && SUPABASE_ANON_KEY
    ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
    : null;

const LOCAL_B2C_STORAGE_KEY = 'antarva_b2c_orders_v1';
const LOCAL_WHOLESALE_STORAGE_KEY = 'antarva_wholesale_inquiries_v1';
const LOCAL_FARMER_STORAGE_KEY = 'antarva_farmer_registrations_v1';

function getLocalList<T>(key: string): T[] {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return [];
    return JSON.parse(raw) as T[];
  } catch {
    return [];
  }
}

function saveLocalItem<T extends { created_at?: string }>(key: string, item: T): void {
  try {
    const existing = getLocalList<T>(key);
    const updated = [{ ...item, created_at: item.created_at || new Date().toISOString() }, ...existing];
    localStorage.setItem(key, JSON.stringify(updated));
  } catch {
    // ignore storage errors
  }
}

/**
 * Queries Supabase `b2c_orders` for the count and recent orders in a given city,
 * falling back to localStorage if offline or table not yet migrated.
 */
export async function fetchCityOrdersFromSupabase(city: string): Promise<{
  count: number;
  recentOrders: B2COrderRecord[];
}> {
  const normalizedCity = city.trim().toLowerCase();
  const localMatches = getLocalList<B2COrderRecord>(LOCAL_B2C_STORAGE_KEY).filter(
    (o) => o.city.trim().toLowerCase() === normalizedCity
  );

  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('b2c_orders')
        .select('*')
        .ilike('city', city.trim())
        .order('created_at', { ascending: false });

      if (!error && data) {
        const remoteOrders = data as B2COrderRecord[];
        // Count live non-seed reservations so seed.sql rows don't double-count with UI baseline
        const liveUserOrders = remoteOrders.filter(
          (o) => !o.razorpay_payment_id?.startsWith('seed_')
        );
        return {
          count: liveUserOrders.length,
          recentOrders: remoteOrders.slice(0, 5),
        };
      }
    } catch {
      // Fallback to local records if offline or table not yet migrated
    }
  }

  return {
    count: localMatches.length,
    recentOrders: localMatches.slice(0, 5),
  };
}

/**
 * Inserts a new ₹50 spot reservation into Supabase `b2c_orders` and mirrors locally.
 */
export async function insertB2COrderToSupabase(
  order: B2COrderRecord
): Promise<{ ok: boolean; record: B2COrderRecord }> {
  saveLocalItem(LOCAL_B2C_STORAGE_KEY, order);

  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('b2c_orders')
        .insert([
          {
            city: order.city,
            customer_name: order.customer_name,
            whatsapp: order.whatsapp,
            pincode: order.pincode,
            box_size: order.box_size,
            reservation_paid_inr: order.reservation_paid_inr,
            total_box_price_inr: order.total_box_price_inr,
            balance_due_inr: order.balance_due_inr,
            payment_status: order.payment_status || 'spot_reserved',
            razorpay_payment_id: order.razorpay_payment_id || null,
          },
        ])
        .select()
        .single();

      if (!error && data) {
        return { ok: true, record: data as B2COrderRecord };
      }
    } catch {
      // Gracefully continue with local persistence
    }
  }

  return { ok: true, record: order };
}

/**
 * Inserts a B2B Wholesale / Export inquiry into Supabase `wholesale_inquiries`.
 */
export async function insertWholesaleInquiryToSupabase(
  inquiry: WholesaleInquiryRecord
): Promise<{ ok: boolean }> {
  saveLocalItem(LOCAL_WHOLESALE_STORAGE_KEY, inquiry);

  if (supabase) {
    try {
      const { error } = await supabase.from('wholesale_inquiries').insert([
        {
          company_name: inquiry.company_name,
          buyer_type: inquiry.buyer_type,
          commodity: inquiry.commodity,
          estimated_tonnage: inquiry.estimated_tonnage,
          whatsapp: inquiry.whatsapp,
          email: inquiry.email,
          status: inquiry.status || 'new_lead',
        },
      ]);

      if (!error) {
        return { ok: true };
      }
    } catch {
      // Fallback to local storage
    }
  }

  return { ok: true };
}

/**
 * Inserts a Farmer / FPO onboarding registration into Supabase `farmer_registrations`.
 */
export async function insertFarmerRegistrationToSupabase(
  registration: FarmerRegistrationRecord
): Promise<{ ok: boolean }> {
  saveLocalItem(LOCAL_FARMER_STORAGE_KEY, registration);

  if (supabase) {
    try {
      const { error } = await supabase.from('farmer_registrations').insert([
        {
          farmer_or_fpo_name: registration.farmer_or_fpo_name,
          entity_type: registration.entity_type,
          village_district_state: registration.village_district_state,
          land_size_or_members: registration.land_size_or_members || null,
          crops_grown: registration.crops_grown,
          whatsapp: registration.whatsapp,
          farming_practice: registration.farming_practice,
          onboarding_status: registration.onboarding_status || 'submitted',
        },
      ]);

      if (!error) {
        return { ok: true };
      }
    } catch {
      // Fallback to local storage
    }
  }

  return { ok: true };
}
