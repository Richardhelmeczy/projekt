import { DoctorAppointment } from '../../../../components/DoctorAppointment'
import { Appoitnmets } from '../../../../components/DoctorAppointmentList'
import { Navbar } from '../../../../components/NavBar'

type DoctorAppointmentPageProps = {
  params: {
    id: string
  }
}

export default async function DoctorAppointmentPage({ params }: DoctorAppointmentPageProps) {
  const doctorId = parseInt(params.id)

  return (
    <main>
      <Navbar />
      <div className="flex min-h-screen flex-col items-center p-24">
        <DoctorAppointment id={doctorId} />
        <p>Appointments :</p>
        <Appoitnmets id={doctorId} />
      </div>
    </main>
  )
}
