'use server'

import { revalidatePath } from 'next/cache'
import { createDB } from '../lib/db'

type CreateappointmentParams = {
  name: string
  lastname: string
  date: string
}

export async function createAppointment(appointment: CreateappointmentParams, id: number) {
  const db = createDB()

  const createdProduct = await db
    .insertInto('doctorsAppointments')
    .values({
      customerName: appointment.name,
      customerLastname: appointment.lastname,
      appointmentDate: appointment.date,
      doctorId: id,
    })
    .returningAll()
    .executeTakeFirstOrThrow()

  revalidatePath('')
}
