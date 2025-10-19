import FilterCard from "@/components/filter-card"
import { Header } from "@/components/Header"
import DoctorCollection from "@/doctor-collection"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
<main className="flex px-6 py-3 gap-6 flex-col md:flex-row mt-9 relative">

     <FilterCard />
<DoctorCollection />
</main>


    </div>
  )
}

export default App
