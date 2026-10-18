-- The playground's one table: messages people send through the site's contact form.
-- Sample rows only; nothing here is real.
create table if not exists public.contacts (
  id bigint generated always as identity primary key,
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

-- Server-side access only: no policies for anon or authenticated, so the public API can't read it.
alter table public.contacts enable row level security;

insert into public.contacts (name, email, message) values
  ('Avery Sample', 'avery@example.com', 'Do you have tables left for the spring show?'),
  ('Blake Example', 'blake@example.com', 'What time do the doors open on Saturday?'),
  ('Casey Demo', 'casey@example.com', 'Is there parking close to the venue?');
