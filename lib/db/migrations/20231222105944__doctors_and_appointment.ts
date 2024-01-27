import { sql, Kysely } from 'kysely'

export async function up(db: Kysely<unknown>): Promise<void> {
  await sql`
    CREATE TABLE doctors (
      id integer primary key autoincrement not null,
      name text not null,
      lastname text not null,
      bio text not null
    );
  `.execute(db)

  await sql`
    CREATE TABLE doctors_appointments (
      id integer primary key autoincrement not null,
      customer_name text not null,
      customer_lastname text not null,
      appointment_date text not null,
      doctor_id integer not null,
      foreign key (doctor_id) references doctors(id)
    );
  `.execute(db)
}

export async function down(db: Kysely<unknown>): Promise<void> {
  await sql`
  
  `.execute(db)
}
