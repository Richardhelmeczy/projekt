import { createDB } from '../lib/db'
import Link from 'next/link'

async function getDoctors() {
  const db = createDB()

  const doctors = await db.selectFrom('doctors').selectAll().execute()

  return doctors
}

type doctorsinfo = {
  id: number
  name: string
  lastname: string
  bio: string
}

function Doctor(props: doctorsinfo) {
  return (
    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div className="text-lg font-semibold">
        {props.name} {props.lastname}
      </div>
      <div>{props.bio}</div>
      <Link href={`/doctors/appointment/${props.id}`}>Appointment</Link>
    </div>
  )
}

export async function DoctorList() {
  const doctors = await getDoctors()

  return (
    <div className="grid grid-cols-3 gap-4">
      {doctors.map((p) => (
        <Doctor key={p.id} id={p.id} name={p.name} lastname={p.lastname} bio={p.bio} />
      ))}
    </div>
  )
}
