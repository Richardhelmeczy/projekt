import { createDB } from '../lib/db'

async function getappoitnmets(id: number) {
  const db = createDB()

  const appoitnmets = await db
    .selectFrom('doctorsAppointments')
    .selectAll()
    .where('doctorsAppointments.doctorId', '=', id)
    .execute()

  return appoitnmets
}

export async function Appoitnmets({ id }: { id: number }) {
  const appoitnmets = await getappoitnmets(id)

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {appoitnmets.map((appo) => (
          // eslint-disable-next-line react/jsx-key
          <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div>{appo.customerName}</div>
            <div>{appo.customerLastname}</div>
            <div>{appo.appointmentDate}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
