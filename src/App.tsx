import FilterCard from "@/components/filter-card"
import { Header } from "@/components/Header"
import DoctorCollection from "@/doctor-collection"

function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Header />
      <main className="flex px-6 py-3 gap-6 flex-col md:flex-row mt-9 max-w-[1380px] mx-auto">
        <FilterCard />
        <DoctorCollection />
      </main>
    </div>
  )
}

export default App
