import { useStepper } from '@/components/sheet-stepper';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

// Assuming SingleBookingItem is defined in the same file or imported
function SingleBookingItem() {
  return (
    <div className='flex items-center justify-between'>
      <p className='text-[#6C7C93] text-xs'>First Name</p>
      <p className='text-[14px] font-semibold text-black-primary'>9:15 AM</p>
    </div>
  );
}

export default function InfoConfirmation() {
  return (
    <div className='space-y-4'>
      <h3 className='text-[24px] text-black-primary font-bold'>Confirm Booking</h3>
      <ConfirmationHeader />
      <BookingSummary />
      <NavigationButtons />
    </div>
  );
}

function ConfirmationHeader() {
  return (
    <div
      className='p-7 flex gap-3 items-center rounded-lg'
      style={{
        background: 'linear-gradient(90deg, rgba(1, 171, 189, 0.06) 0%, rgba(1, 147, 162, 0.06) 158.4%)',
      }}
    >
      <Avatar className='w-[81px] h-[75px]'>
        <AvatarFallback className='size-full'>US</AvatarFallback>
        <AvatarImage src='' />
      </Avatar>
      <div>
        <h3 className='font-bold text-[#22222A] text-[22.1px]'>Altano Clinic</h3>
        <div className='border-dashed border-[#E0E6EB] border rounded-sm px-2 py-1.5 flex items-center justify-between'>
          <h4 className='text-[#658D1B] text-xs font-semibold'>Adult</h4>
          <div className='flex gap-2'>
            <div className='bg-white h-[20px] w-[40px] rounded-sm flex items-center justify-center'>
              <p className='text-xs text-black'>$44</p>
            </div>
            <div className='bg-white h-[20px] w-[40px] rounded-sm flex items-center justify-center'>
              <p className='text-xs text-black'>$44</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BookingSummary() {
  return (
    <div className='bg-[#F7F8F9] p-5'>
      <h2 className='text-lg font-bold text-black-primary'>Booking Summary</h2>
      <div className='flex flex-col gap-y-3 mt-4'>
        <SingleBookingItem />
        <SingleBookingItem />
        <SingleBookingItem />
        <SingleBookingItem />
        <hr className='bg-[#6C7C93]' />
        <SingleBookingItem />
      </div>
    </div>
  );
}

function NavigationButtons() {
  const { setStep, setOpen ,setModalOpen} = useStepper();



  return (
    <>
      <div className='flex items-center gap-2 w-full'>
        <Button className='flex-1' variant='secondary' onClick={() => setStep('form')}>
          Back
        </Button>
        <Button className='flex-1' onClick={()=>{
            setOpen(false)
            setModalOpen(true)
        }}>
          Confirm Booking
        </Button>
      </div>
    </>
  );
}
