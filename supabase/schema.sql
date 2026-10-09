-- WebKraft site agent — run once in Supabase SQL editor
-- Then paste your project URL + anon key into lib/agent.ts

create table if not exists public.lead_chats (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  source text not null default 'site-agent',
  lead jsonb not null,
  messages jsonb not null
);

-- anonymous visitors may INSERT only; no one can read via anon key
alter table public.lead_chats enable row level security;

create policy "anon insert only"
  on public.lead_chats
  for insert
  to anon
  with check (true);

-- optional: view leads in the dashboard yourself
-- (service role bypasses RLS; or add a select policy for authenticated)
