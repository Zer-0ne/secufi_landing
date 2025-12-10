/*
  # Create Demo Requests Table

  ## Overview
  This migration creates a table to store demo schedule requests from potential customers
  who want to see a product demonstration or connect with the sales team.

  ## New Tables
  - `demo_requests`
    - `id` (uuid, primary key) - Unique identifier for each demo request
    - `name` (text) - Full name of the requester
    - `email` (text, unique) - Email address for communication
    - `phone` (text) - Contact phone number
    - `company` (text, optional) - Company or organization name
    - `role` (text, optional) - Job title or role
    - `preferred_date` (date, optional) - Preferred date for the demo
    - `preferred_time` (text, optional) - Preferred time slot
    - `timezone` (text, optional) - User's timezone
    - `interests` (text, optional) - Areas of interest or specific topics
    - `message` (text, optional) - Additional message or notes
    - `status` (text) - Request status (pending, scheduled, completed, cancelled)
    - `created_at` (timestamptz) - Timestamp of request submission
    - `updated_at` (timestamptz) - Last update timestamp

  ## Security
  - Enable RLS on the table
  - Allow public inserts (for demo request form)
  - Restrict reads to authenticated users only
*/

CREATE TABLE IF NOT EXISTS demo_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text UNIQUE NOT NULL,
  phone text NOT NULL,
  company text,
  role text,
  preferred_date date,
  preferred_time text,
  timezone text,
  interests text,
  message text,
  status text DEFAULT 'pending' NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE demo_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public to insert demo requests"
  ON demo_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view demo requests"
  ON demo_requests
  FOR SELECT
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_demo_requests_email ON demo_requests(email);
CREATE INDEX IF NOT EXISTS idx_demo_requests_status ON demo_requests(status);
CREATE INDEX IF NOT EXISTS idx_demo_requests_created_at ON demo_requests(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_demo_requests_preferred_date ON demo_requests(preferred_date);
