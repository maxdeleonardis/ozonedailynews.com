create table public.content_registry (
  slug text not null,
  title text not null default ''::text,
  description text not null default ''::text,
  publish_date timestamp with time zone not null default now(),
  modified_date timestamp with time zone not null default now(),
  category text not null default 'General'::text,
  tags text[] not null default '{}'::text[],
  author text not null default 'ObjectWire Editorial'::text,
  author_slug text null,
  priority numeric(3, 2) not null default 0.70,
  change_frequency text not null default 'weekly'::text,
  featured boolean not null default false,
  image_url text null,
  image_width integer null,
  image_height integer null,
  image_alt text null,
  image_credit text null,
  created_at timestamp with time zone not null default now(),
  updated_at timestamp with time zone not null default now(),
  component_type text not null default 'standard_article'::text,
  constraint content_registry_pkey primary key (slug)
) TABLESPACE pg_default;

create index IF not exists idx_cr_category on public.content_registry using btree (category) TABLESPACE pg_default;

create index IF not exists idx_cr_featured on public.content_registry using btree (featured) TABLESPACE pg_default
where
  (featured = true);

create index IF not exists idx_cr_author_slug on public.content_registry using btree (author_slug) TABLESPACE pg_default;

create index IF not exists idx_cr_tags on public.content_registry using gin (tags) TABLESPACE pg_default;

create index IF not exists idx_cr_publish_date on public.content_registry using btree (publish_date desc) TABLESPACE pg_default;

create trigger cr_updated_at BEFORE
update on content_registry for EACH row
execute FUNCTION cr_set_updated_at ();