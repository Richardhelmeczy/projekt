'use client'
import { useForm } from 'react-hook-form'
import { createAppointment } from '../actions/create-appointment'

type FormData = {
  name: string
  lastname: string
  date: string
}

export function DoctorAppointment({ id }: { id: number }) {
  const { register, handleSubmit } = useForm<FormData>()

  const onSubmit = handleSubmit(async (data) => {
    console.log(data.name)
    console.log(data.lastname)
    console.log(data.date)

    await createAppointment(data, id)
  })

  return (
    <form className="flex flex-col" onSubmit={onSubmit}>
      <label>Name</label>
      <input {...register('name')} />
      <label>Lastname</label>
      <input {...register('lastname')} />
      <label>Date</label>
      <input {...register('date')} type="date" />
      <input type="submit" value="Create" className="p-2" />
    </form>
  )
}
