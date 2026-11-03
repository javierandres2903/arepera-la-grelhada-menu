-- Supabase setup for Arepera La Grelhada.
-- Run this file in Supabase Dashboard > SQL Editor.

create table if not exists public.menu_prices (
  item_name text primary key,
  price numeric(10, 2) not null default 0 check (price >= 0)
);

create table if not exists public.business_settings (
  id integer primary key check (id = 1),
  is_open boolean
);

create table if not exists public.menu_owners (
  user_id uuid primary key references auth.users (id) on delete cascade
);

alter table public.menu_prices enable row level security;
alter table public.business_settings enable row level security;
alter table public.menu_owners enable row level security;

grant select on public.menu_prices to anon, authenticated;
grant insert, update on public.menu_prices to authenticated;
grant select on public.business_settings to anon, authenticated;
grant update on public.business_settings to authenticated;
grant select on public.menu_owners to authenticated;

create or replace function public.is_menu_owner()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.menu_owners
    where user_id = auth.uid()
  );
$$;

revoke all on function public.is_menu_owner() from public, anon;
grant execute on function public.is_menu_owner() to authenticated;

drop policy if exists "Anyone can read menu prices" on public.menu_prices;
create policy "Anyone can read menu prices"
  on public.menu_prices for select
  to anon, authenticated
  using (true);

drop policy if exists "Owners can insert menu prices" on public.menu_prices;
create policy "Owners can insert menu prices"
  on public.menu_prices for insert
  to authenticated
  with check (public.is_menu_owner());

drop policy if exists "Owners can update menu prices" on public.menu_prices;
create policy "Owners can update menu prices"
  on public.menu_prices for update
  to authenticated
  using (public.is_menu_owner())
  with check (public.is_menu_owner());

drop policy if exists "Anyone can read business status" on public.business_settings;
create policy "Anyone can read business status"
  on public.business_settings for select
  to anon, authenticated
  using (true);

drop policy if exists "Owners can update business status" on public.business_settings;
create policy "Owners can update business status"
  on public.business_settings for update
  to authenticated
  using (public.is_menu_owner())
  with check (public.is_menu_owner());

drop policy if exists "Owners can read their own owner record" on public.menu_owners;
create policy "Owners can read their own owner record"
  on public.menu_owners for select
  to authenticated
  using (user_id = (select auth.uid()));

insert into public.menu_prices (item_name, price) values
  ('2 contorno', 0),
  ('3 contorno', 0),
  ('Contornos de arepa', 0),
  ('Contornos especiales', 0),
  ('Desayuno criollo', 0),
  ('Bandeja grelhada', 0),
  ('Arepa viuda', 0),
  ('Envase de llevar', 0),
  ('Empanadas básicas', 0),
  ('Contornos de empanadas', 0),
  ('Empanadas especiales', 0),
  ('Empanadas de mariscos', 0),
  ('Milanesa de pollo a la plancha', 0),
  ('Chuleta ahumada', 0),
  ('Mechada', 0),
  ('Bistec de solomo', 0),
  ('Pernil', 0),
  ('Asado negro', 0),
  ('Arroz', 0),
  ('Pasta larga o corta', 0),
  ('Ensalada mixta', 0),
  ('Ensalada rallada', 0),
  ('Tajada', 0),
  ('Caraota', 0),
  ('Arepita frita', 0),
  ('Ensalada cocida', 0),
  ('Sopa de costilla', 0),
  ('Carne en vara', 0),
  ('Pork belly', 0),
  ('Pollo asado', 0)
on conflict (item_name) do nothing;

insert into public.business_settings (id, is_open)
values (1, null)
on conflict (id) do nothing;

-- After creating the owner's account in Authentication > Users, register it here:
-- insert into public.menu_owners (user_id)
-- select id from auth.users where email = 'CORREO_DEL_DUENO'
-- on conflict (user_id) do nothing;

-- In the HTML, set SUPABASE_URL and SUPABASE_ANON_KEY to the project's
-- Project URL and publishable/anon key. Never put a service_role key in the page.
