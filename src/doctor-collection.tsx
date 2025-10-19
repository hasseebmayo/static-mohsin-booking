import DoctorProfileCard from '@/components/doctor-profile-card'

export default function DoctorCollection() {
  return (
    <div className='flex flex-col gap-y-3 flex-1'>
      <h2 className='text-black-primary text-2xl font-bold'>Book Your Appointment</h2>
      <p className='text-[#6C7C93] text-base'>Browse available telehealth providers and book your appointment</p>
   <div className="
  grid gap-4
  grid-cols-1
  sm:grid-cols-2
  lg:grid-cols-3
  [@media(min-width:1300px)]:grid-cols-4
">
  <DoctorProfileCard />
  <DoctorProfileCard />
  <DoctorProfileCard />
  <DoctorProfileCard />
</div>


    </div>
  )
}
