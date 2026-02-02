-- Run this SQL in your Supabase dashboard (SQL Editor)
-- Creates the subscriptions table for Becoming Her

create table if not exists subscriptions (
  user_id text primary key,
  stripe_customer_id text,
  stripe_subscription_id text,
  tier text not null default 'free',
  status text not null default 'inactive',
  current_period_end timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Index for faster lookups
create index if not exists idx_subscriptions_stripe_customer on subscriptions(stripe_customer_id);
create index if not exists idx_subscriptions_stripe_sub on subscriptions(stripe_subscription_id);

-- Disable RLS since we only access via service role key from server
alter table subscriptions enable row level security;

-- Only service role can access (no client-side access)
create policy "Service role only" on subscriptions
  for all
  using (auth.role() = 'service_role');

-- User profiles for onboarding data
create table if not exists user_profiles (
  user_id text primary key,
  preferred_name text,
  transition_stage text,
  goals text[] default '{}',
  onboarding_completed boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table user_profiles enable row level security;

create policy "Service role only" on user_profiles
  for all
  using (auth.role() = 'service_role');
