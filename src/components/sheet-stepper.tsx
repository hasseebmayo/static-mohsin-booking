import BookingConfirmationModal from '@/components/booking-modal';
import InfoConfirmation from '@/components/info-confirmation';
import InfoForm from '@/components/info-form';
import TimeSlotSelection from '@/components/time-slot-selection';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { createContext, useContext, useState, type ReactNode } from 'react';

// Define types
type Step = 'time-slot' | 'form' | 'info';

type IStepperContext = {
    step: Step;
    setStep: (step: Step) => void;
    open:boolean;
    setOpen:(open:boolean)=>void
    modalOpen:boolean;
    setModalOpen:(open:boolean)=>void
};

// Create context
const StepperContext = createContext<IStepperContext | undefined>(undefined);

// Custom hook
// eslint-disable-next-line react-refresh/only-export-components
export function useStepper() {
    const context = useContext(StepperContext);
    if (!context) {
        throw new Error('useStepper must be used within a Stepper');
    }
    return context;
}

// Stepper component
function Stepper({ children }: { children: ReactNode }) {
    const [step, setStep] = useState<Step>('time-slot');
    const [open,setOpen] = useState(false)
    const [modalOpen,setModalOpen] = useState(false)
    return (
        <StepperContext.Provider value={{ step, setStep,open,setOpen,modalOpen,setModalOpen }}>
            {children}
        </StepperContext.Provider>
    );
}

// Child component that uses useStepper for step content
function StepContent() {
    const { step } = useStepper();
    return (
        <>
            {step === 'time-slot' && <TimeSlotSelection />}
            {step === 'form' && <InfoForm />}
            {step === "info" && <InfoConfirmation />}
        </>
    );
}

// New component to handle Sheet and onOpenChange
function SheetContainer() {
    const { setStep,open,setOpen,modalOpen,setModalOpen } = useStepper();
    return (
        <>

        <Sheet
            onOpenChange={(open) => {
                if (open) {
                    setStep('time-slot'); // Reset to time-slot when sheet opens
                }
                setOpen(open)
            }}
            open={open}
        >
            <SheetTrigger>trigger</SheetTrigger>
            <SheetContent className="p-7 min-w-[500px] overflow-y-auto">
                <StepContent />
            </SheetContent>
        </Sheet>
        <BookingConfirmationModal  open={modalOpen} onOpenChange={setModalOpen}/>
          </>
    );
}

// Main SheetStepper component
export default function SheetStepper() {
    return (
        <Stepper>
            <SheetContainer />
        </Stepper>
    );
}
