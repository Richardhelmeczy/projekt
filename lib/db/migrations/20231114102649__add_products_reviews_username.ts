import { sql, Kysely } from 'kysely'

export async function up(db: Kysely<unknown>): Promise<void> {
  await sql`
  alter table products_reviews add column username text not null;
  `.execute(db)
}

export async function down(db: Kysely<unknown>): Promise<void> {
  await sql`
  `.execute(db)
}
