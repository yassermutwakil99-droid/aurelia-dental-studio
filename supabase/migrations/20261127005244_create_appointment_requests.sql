/*
# Create appointment_requests table (single-tenant, no auth)

1. New Tables
- `appointment_requests`
  - `id` (uuid, primary key, auto-generated)
  - `name` (text, not null) — visitor's full name
  - `email` (text, not null) — visitor's email address
  - `phone` (text, nullable) — visitor's phone number
  - `treatment` (text, not null) — the treatment the visitor is interested in
  - `preferred_date` (date, nullable) — preferred appointment date
  - `message` (text, nullable) — optional message from the visitor
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `appointment_requests`.
- Grant INSERT to `anon` + `authenticated` — the site has no sign-in, and
  visitors only ever submit new requests; no read/update/delete is exposed.
- INSERT-only policies for anon + authenticated because the data is private
  to the clinic and intentionally not readable through the public site.
*/

CREATE TABLE IF NOT EXISTS appointment_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  treatment text NOT NULL,
  preferred_date date,
  message text,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE appointment_requests ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON appointment_requests TO anon, authenticated;

DROP POLICY IF EXISTS "Anyone can submit an appointment request" ON appointment_requests;
CREATE POLICY "Anyone can submit an appointment request"
ON appointment_requests FOR INSERT
TO anon, authenticated
WITH CHECK (true);
