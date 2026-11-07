-- Antarva Agri — Core Schema Migration
-- Tables: b2c_orders, wholesale_inquiries, farmer_registrations

create extension if not exists "pgcrypto";

-- 1. B2C 30-Spot City Batch Drop Orders (`b2c_orders`)
create table if not exists public.b2c_orders (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  city text not null,
  customer_name text not null,
  whatsapp text not null,
  pincode text not null,
  box_size text not null,
  reservation_paid_inr integer not null default 50,
  total_box_price_inr integer not null,
  balance_due_inr integer not null,
  payment_status text not null default 'spot_reserved',
  razorpay_payment_id text
);

create index if not exists idx_b2c_orders_city on public.b2c_orders (lower(city));
create index if not exists idx_b2c_orders_created_at on public.b2c_orders (created_at desc);

-- 2. B2B Wholesale, Export & Import Inquiries (`wholesale_inquiries`)
create table if not exists public.wholesale_inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  company_name text not null,
  buyer_type text not null,
  commodity text not null,
  estimated_tonnage text not null,
  whatsapp text not null,
  email text not null,
  status text not null default 'new_lead'
);

create index if not exists idx_wholesale_inquiries_created_at on public.wholesale_inquiries (created_at desc);

-- 3. Smallholder Farmer & FPO Onboarding Registrations (`farmer_registrations`)
create table if not exists public.farmer_registrations (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  farmer_or_fpo_name text not null,
  entity_type text not null,
  village_district_state text not null,
  land_size_or_members text,
  crops_grown text not null,
  whatsapp text not null,
  farming_practice text not null,
  onboarding_status text not null default 'submitted'
);

create index if not exists idx_farmer_registrations_created_at on public.farmer_registrations (created_at desc);

-- 4. Enable Row Level Security (RLS) on all 3 tables
alter table public.b2c_orders enable row level security;
alter table public.wholesale_inquiries enable row level security;
alter table public.farmer_registrations enable row level security;

-- Public INSERT policies on all 3 tables
drop policy if exists "Allow public insert on b2c_orders" on public.b2c_orders;
create policy "Allow public insert on b2c_orders"
  on public.b2c_orders
  for insert
  to anon, authenticated
  with check (true);

drop policy if exists "Allow public select on b2c_orders" on public.b2c_orders;
create policy "Allow public select on b2c_orders"
  on public.b2c_orders
  for select
  to anon, authenticated
  using (true);

drop policy if exists "Allow public insert on wholesale_inquiries" on public.wholesale_inquiries;
create policy "Allow public insert on wholesale_inquiries"
  on public.wholesale_inquiries
  for insert
  to anon, authenticated
  with check (true);

drop policy if exists "Allow public insert on farmer_registrations" on public.farmer_registrations;
create policy "Allow public insert on farmer_registrations"
  on public.farmer_registrations
  for insert
  to anon, authenticated
  with check (true);
