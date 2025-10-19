import { useStepper } from '@/components/sheet-stepper'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function TimeSlotSelection() {
    const {setStep} = useStepper()
    return (
        <div className='space-y-3'>
            <h3 className='text-[24px] text-black-primary font-bold'>
                Select Time Slot
            </h3>
            <ConfirmationHeader />
            <Tabs defaultValue='all' className=''>
                <TabsList className='flex w-full'
                 style={{
        background: "linear-gradient(90deg, rgba(1, 171, 189, 0.06) 0%, rgba(1, 147, 162, 0.06) 158.4%)"


    }}
                >
                    <TabsTrigger value='all' className='flex-1 w-full'>
                        All
                    </TabsTrigger>
                    <TabsTrigger value='morning' className='flex-1'>
                        Morning
                    </TabsTrigger>
                    <TabsTrigger value='afternoon' className='flex-1'>
                        Afternoon
                    </TabsTrigger>
                    <TabsTrigger value='evening' className='flex-1'>
                        Evening
                    </TabsTrigger>
                </TabsList>
                <TabsContent value='all'>
                    <h2 className='text-base text-[#22222A] font-bold'>Available Slots - 9 Oct 2025</h2>
                    <TimeSlots />
                </TabsContent>
                <TabsContent value='morning'>
                    <h2 className='text-base text-[#22222A] font-bold'>Available Slots - 9 Oct 2025</h2>
                    <TimeSlots />
                </TabsContent>
                <TabsContent value='evening'>
                    <h2 className='text-base text-[#22222A] font-bold'>Available Slots - 9 Oct 2025</h2>
                    <TimeSlots />
                </TabsContent>
                <TabsContent value='afternoon'>
                    <h2 className='text-base text-[#22222A] font-bold'>Available Slots - 9 Oct 2025</h2>
                    <TimeSlots />
                </TabsContent>
            </Tabs>
            <Button className='w-full' withGradient onClick={()=>{
                console.log("clicked")
                setStep("form")
            }}>Continue</Button>
        </div>
    )
}

function ConfirmationHeader() {
    return (
    <div className='p-7 flex gap-3 items-center rounded-lg border border-[rgba(0, 104, 208, 0.2)]' style={{
        background: "linear-gradient(90deg, rgba(1, 171, 189, 0.06) 0%, rgba(1, 147, 162, 0.06) 158.4%)"


    }}


    >

        <Avatar className='w-[81px] h-[75px]'>
            <AvatarFallback className='size-full'>US</AvatarFallback>
            <AvatarImage src='asdasd' alt="Users " />
        </Avatar>
        <div>

            <h3 className='font-bold text-[#22222A] text-[22.1px]'>Altano Clinic</h3>
            <div className='border-dashed border-[#E0E6EB] border rounded-sm px-2 py-1.5 flex items-center justify-between gap-4'>
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
    )
}

function SingleTimeBox() {
    return <button className='border border-[#E6E6E6] px-[20px] py-[10px] text-base text-black-primary rounded-md'>
        9:00 AM
    </button>
}


function TimeSlots() {
    return (<div className='flex flex-wrap gap-4 mt-4
    '>
        <SingleTimeBox />
        <SingleTimeBox />
        <SingleTimeBox />
        <SingleTimeBox />
        <SingleTimeBox />
    </div>)
}
