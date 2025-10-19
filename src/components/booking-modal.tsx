import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
type ModalType = {
    open:boolean;
    onOpenChange:(open:boolean)=>void
}
export default function BookingConfirmationModal({onOpenChange,open}:ModalType) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}> {/* Set open={true} for demo; manage state as needed */}
      <DialogContent className="max-w-md p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Booking Confirmed!</DialogTitle>
        </DialogHeader>
        <div className="mt-4 text-center">
          <div className="mx-auto w-12 h-12 rounded-full border-2 border-blue-500 flex items-center justify-center">
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <DialogDescription className="mt-4 text-lg font-semibold">Your Booking Has Been Logged!</DialogDescription>
          <p className="mt-2 text-gray-600">Your appointment with Sarah Johnson has been logged for 9:15 AM on 9 Oct 2025.</p>
          <div className="mt-4 p-4 bg-gray-100 rounded-lg text-center">
            <p className="text-sm font-medium">Booking Reference</p>
            <p className="text-xl font-bold">BK75227</p>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            A payment link has been sent to your registered email address and phone number. Please make the payment within 10 minutes to confirm your booking!
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
