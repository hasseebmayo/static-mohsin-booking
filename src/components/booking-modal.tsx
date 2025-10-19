import { useStepper } from "@/components/sheet-stepper";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { CircleCheck } from "lucide-react";
type ModalType = {
    open:boolean;
    onOpenChange:(open:boolean)=>void
}
export default function BookingConfirmationModal({onOpenChange,open}:ModalType) {
  const {setModalOpen} = useStepper()
  return (
    <Dialog open={open} onOpenChange={onOpenChange}> {/* Set open={true} for demo; manage state as needed */}
      <DialogContent className="max-w-md py-6 px-0" showCloseButton={false}>
        <DialogHeader className="border-b px-6 pb-4 border-[#e0e6eb]" >
          <DialogTitle className="text-[23px] font-bold text-black-primary">Booking Confirmed!</DialogTitle>
        </DialogHeader>
        <div className="mt-4 text-center px-6">
          <div className="mx-auto size-[80px] rounded-full  flex items-center justify-center bg-[#f7f8f9]">
            <CircleCheck  className="text-primary size-9"/>
          </div>
          <DialogDescription className="mt-4 text-[24px] text-black-primary1 font-semibold">Your Booking Has Been Logged!</DialogDescription>
          <p className="mt-2 text-base text-[#6c7c93]">Your appointment with Sarah Johnson has been logged for 9:15 AM on 9 Oct 2025.</p>
          <div className="mt-4 p-4  rounded-lg text-center
           border border-[#0068d033]
          "
          style={{
        background: "linear-gradient(90deg, rgba(1, 171, 189, 0.06) 0%, rgba(1, 147, 162, 0.06) 158.4%)"


    }}
          >
            <p className="text-sm font-medium text-[#6c7c93]">Booking Reference</p>
            <p className="text-xl font-bold text-black-primary">BK75227</p>
          </div>
          <p className="mt-4 text-sm text-[#6c7c93]">
            A payment link has been sent to your registered email address and phone number. Please make the payment within 10 minutes to confirm your booking!
          </p>
        </div>
        <div className="border-t border-[#e0e6eb] px-6">
          <Button withGradient className="w-full mt-3" onClick={()=>{
            setModalOpen(false)
          }}>
            Back to Home
          </Button>

        </div>
      </DialogContent>
    </Dialog>
  )
}
