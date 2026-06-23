create table if not exists classes (
  id bigserial primary key,
  name text not null,
  slug text not null unique,
  description text not null
);

create table if not exists skills (
  id bigserial primary key,
  name text not null,
  slug text not null unique,
  tags text[] not null default '{}',
  description text not null,
  level_requirement integer not null default 1
);

create table if not exists builds (
  id bigserial primary key,
  title text not null,
  slug text not null unique,
  "class" text not null references classes(slug),
  playstyle text not null,
  difficulty text not null,
  content text not null
);
