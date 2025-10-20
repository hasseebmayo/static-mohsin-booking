import SheetStepper from "@/components/sheet-stepper";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue } from "@/components/ui/select";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export default function DoctorProfileCard() {
    return (
        <Card className='border-[#E0E6EB] rounded-[12px]
    py-0 px-0 shadow-[0px_2px_4px_-2px_#0000001A]'>
            <CardContent className='flex flex-col gap-y-3 p-4'>
                <ProfileHeader />
                <ProfileSelectors />
                <TimeSlots />
            </CardContent>
        </Card>
    )
}


function ProfileHeader() {
    return (
        <div className="flex items-center  flex-col md:flex-row w-full gap-3">
            <Avatar className="size-[60px] rounded-md shadow-[0px_2px_4px_-2px_#0000001A,0px_4px_6px_-1px_#0000001A,0px_0px_0px_2px_#658D1B1A]">
                <AvatarFallback className="size-full rounded-md">
                    US
                </AvatarFallback>
                <AvatarImage src="/public/vetzi.svg"  alt="User Profile" />
            </Avatar>
            <div className="flex  justify-between flex-col ">
                <h3 className="font-bold text-base text-black-primary">Galing Clinic</h3>
                <div className="flex justify-between items-center gap-2">
                    <span className="bg-[#F7F8F9] rounded-md text-center p-2
                    text-black-primary text-[9px]">
                        From 45$
                    </span>
                    <button className="text-primary flex items-center justify-center text-[10px] font-medium gap-1">
                        <span>Show Prices</span>
                        <div>
                        <ArrowRight className="size-2" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

function ProfileSelectors(){
    return (
        <div className="flex w-full gap-3 flex-col md:flex-row">

        <Select>
            <SelectTrigger className="flex-1 bg-[#F7F8F9] rounded-md border-[#0171DE0D] text-[11px]">
                <SelectValue placeholder="Language" className="text-[11px]" />
            </SelectTrigger>
            <SelectContent className="text-[11px]">
                <SelectItem value="en" className="text-[11px]">Eng</SelectItem>
                <SelectItem value="uk" className="text-[11px]">Spanish</SelectItem>
            </SelectContent>
        </Select>
        <Select>
            <SelectTrigger className="flex-1 bg-[#F7F8F9] text-[11px]">
                <SelectValue placeholder="Gender" className="text-[11px]" />
            </SelectTrigger>
            <SelectContent className="text-[11px]">
                <SelectItem value="en" className="text-[11px]">Male</SelectItem>
                <SelectItem value="uk" className="text-[11px]">Female</SelectItem>
            </SelectContent>
        </Select>
        </div>
    )
}


function TimeSlots(){
    return (
        <div className="flex gap-y-3 flex-col">
            <div className="text-[#B0B0B0] flex items-center
            gap-x-2">
                <Calendar className="size-4"/>
                <p className=" font-medium text-xs">Available Time Slots</p>
            </div>
            <SingleTimeSlot />
            <SingleTimeSlot />
            <SingleTimeSlot />
            <AvailableTimeSlot />
            <div className="w-full flex items-center justify-center">
                <SheetStepper>

                <button className="underline font-bold text-black-primary text-[10px]">
                    See more timeslots
                </button>
                </SheetStepper>
            </div>
        </div>
    )
}


function SingleTimeSlot(){
    return (
    <SheetStepper>
  <button className="border w-full  flex border-[#B6B6B6] border-dashed p-3  rounded-md items-center gap-4">
        <span className="size-[20px] rounded-sm bg-[#F7F8F9] flex items-center justify-center">
            <Clock  className="size-2"/>
        </span>
        <p className="text-[10px] text-[#65758B]">9 Oct 2025</p>
        <p className="text-xs font-semibold text-black-primary">
            19:00
        </p>
    </button>
    </SheetStepper>
  )
}

function AvailableTimeSlot(){
    return (
        <button className="border w-full  flex border-[#0068D033]  p-3  rounded-md items-center gap-4 justify-center" style={{
            background: "linear-gradient(90deg, rgba(1, 171, 189, 0.06) 0%, rgba(1, 147, 162, 0.06) 158.4%)"

        }}>
       <p className="text-[#6C7C93] text-[10px]">
           Next Available
        </p>
        <p className="text-[11.1px] text-black-primary ">
            Today at <span className="font-bold">14:00</span>
        </p>

    </button>
    )
}
