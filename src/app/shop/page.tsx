import { Navbar } from '../../components/NavBar'
import { ProductList } from '../../components/ProductList'

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto p-4">
        <ProductList />
      </div>
    </main>
  )
}
