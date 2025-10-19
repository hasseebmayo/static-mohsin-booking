import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Select, SelectContent, SelectTrigger,SelectItem, } from '@/components/ui/select'
import { SelectValue } from '@radix-ui/react-select'
import { Calendar, MapPin } from 'lucide-react'
import type { ReactNode } from 'react'

 function FilterCard() {
  return (
    <Card className='border-[#E0E6EB] border rounded-md
    py-0 px-0'>

        <CardContent className='flex flex-col gap-y-3 p-4'>
          <Container>
             <Label className='text-[#6C7C93] flex items-center gap-2'>
              <Calendar  className='size-5'/>
              <span className='text-xs font-bold'>

                Date
              </span>
            </Label>
            <Input
          withLinearGradient
             className=''
             type='date'
            />
          </Container>
          <Container>
             <Label className='text-[#6C7C93] flex items-center gap-2'>
              <MapPin  className='size-5'/>
              <span className='text-xs font-bold'>

                Service
              </span>
            </Label>
    <Select>
      <SelectTrigger className='w-full' style={{background: "linear-gradient(90deg, rgba(0, 127, 242, 0.05) 0%, rgba(1, 54, 136, 0.05) 158.4%)"}}>

<SelectValue  placeholder="Standard Gpt Consult" className='w-full'/>
      </SelectTrigger>
      <SelectContent>
        <SelectItem  value='somevalue'>Some Value</SelectItem>
      </SelectContent>
    </Select>
          </Container>
          <div className='flex flex-col gap-3'>
          <h3 className='text-black text-xs font-bold'>
            Time Preference
          </h3>
            <RadioSelection />
          </div>

            {/* Content for Date filter goes here */}
        </CardContent>
    </Card>
  )
}

function Container({children}:{children:ReactNode}){
  return <div className='flex flex-col gap-y-2'>{children}</div>
}

function  RadioSelection(){
  return (  <RadioGroup
   defaultValue="comfortable">
      <div className="flex items-center gap-3">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1" className='text-[#263140]'>Morning (8 AM - 12 PM)</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2" className='text-[#263140]'>Afternoon (12 PM - 5 PM)</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3" className='text-[#263140]'>Evening (5 PM - 9 PM)</Label>
      </div>
    </RadioGroup>)
}

export default function FilterCardCollection(){
  return (<div className='flex flex-col gap-y-3 md:w-[20%] '>
    <h2 className='text-[#263140] text-xl font-bold'>Filters</h2>
    <FilterCard />
    <Button>
      Apply Filters
    </Button>
    <span  className='text-[#6C7C93] text-xs text-center'>Showing results based on your preferences</span>
  </div>)
}
