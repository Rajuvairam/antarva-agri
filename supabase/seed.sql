-- Antarva Agri — Initial City Batch Reservations Seed Data
-- Seeds realistic initial ₹50 spot reservations across major Indian cities
-- (Bengaluru, Chennai, Mumbai, Delhi NCR, Guwahati, Hyderabad)

insert into public.b2c_orders (
  city,
  customer_name,
  whatsapp,
  pincode,
  box_size,
  reservation_paid_inr,
  total_box_price_inr,
  balance_due_inr,
  payment_status,
  razorpay_payment_id
)
values
  -- Bengaluru
  ('Bengaluru', 'Aarav Rao', '+919845011201', '560034', '2.5 kg Family Box', 50, 799, 749, 'spot_reserved', 'seed_blr_01'),
  ('Bengaluru', 'Meera Nair', '+919845011202', '560038', '5 kg Sharing Box', 50, 1499, 1449, 'spot_reserved', 'seed_blr_02'),
  ('Bengaluru', 'Karthik Hegde', '+919845011203', '560102', '1 kg Trial Box', 50, 349, 299, 'spot_reserved', 'seed_blr_03'),

  -- Chennai
  ('Chennai', 'Ananya Sundaram', '+919840022101', '600020', '2.5 kg Family Box', 50, 799, 749, 'spot_reserved', 'seed_maa_01'),
  ('Chennai', 'Sundar Rajan', '+919840022102', '600041', '2.5 kg Family Box', 50, 799, 749, 'spot_reserved', 'seed_maa_02'),
  ('Chennai', 'Divya Krishnan', '+919840022103', '600018', '1 kg Trial Box', 50, 349, 299, 'spot_reserved', 'seed_maa_03'),

  -- Mumbai
  ('Mumbai', 'Rohan Deshmukh', '+919820033101', '400050', '5 kg Sharing Box', 50, 1499, 1449, 'spot_reserved', 'seed_bom_01'),
  ('Mumbai', 'Neha Kulkarni', '+919820033102', '400076', '2.5 kg Family Box', 50, 799, 749, 'spot_reserved', 'seed_bom_02'),
  ('Mumbai', 'Siddharth Mehta', '+919820033103', '400013', '2.5 kg Family Box', 50, 799, 749, 'spot_reserved', 'seed_bom_03'),

  -- Delhi NCR
  ('Delhi NCR', 'Vikram Malhotra', '+919810044101', '110016', '2.5 kg Family Box', 50, 799, 749, 'spot_reserved', 'seed_del_01'),
  ('Delhi NCR', 'Aditi Sharma', '+919810044102', '122002', '5 kg Sharing Box', 50, 1499, 1449, 'spot_reserved', 'seed_del_02'),
  ('Delhi NCR', 'Kabir Khanna', '+919810044103', '201301', '1 kg Trial Box', 50, 349, 299, 'spot_reserved', 'seed_del_03'),

  -- Guwahati
  ('Guwahati', 'Bhaskarjyoti Bora', '+919435055101', '781005', '5 kg Sharing Box', 50, 1499, 1449, 'spot_reserved', 'seed_gau_01'),
  ('Guwahati', 'Plabita Hazarika', '+919435055102', '781022', '2.5 kg Family Box', 50, 799, 749, 'spot_reserved', 'seed_gau_02'),
  ('Guwahati', 'Manash Kalita', '+919435055103', '781003', '1 kg Trial Box', 50, 349, 299, 'spot_reserved', 'seed_gau_03'),

  -- Hyderabad
  ('Hyderabad', 'Pranav Reddy', '+919849066101', '500033', '2.5 kg Family Box', 50, 799, 749, 'spot_reserved', 'seed_hyd_01'),
  ('Hyderabad', 'Kavya Rao', '+919849066102', '500081', '1 kg Trial Box', 50, 349, 299, 'spot_reserved', 'seed_hyd_02'),
  ('Hyderabad', 'Harsha Vardhan', '+919849066103', '500034', '5 kg Sharing Box', 50, 1499, 1449, 'spot_reserved', 'seed_hyd_03');
