import { DoctorList } from '../../components/DoctorList'
import { Navbar } from '../../components/NavBar'
export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex min-h-screen flex-col items-center p-24">
        <div>Doctors List:</div>
        <DoctorList />
      </div>
    </main>
  )
}
