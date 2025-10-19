import React from 'react'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useForm, type Control, type FieldValues, type Path } from 'react-hook-form'
import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useStepper } from '@/components/sheet-stepper'

// ✅ Schema
const formSchema = z.object({
  first_name: z.string().min(1, "First Name is required"),
  last_name: z.string().min(1, "Last Name is required"),
  phone_no: z.string().min(1, "Phone number is required"),
  email: z.string().email("Invalid email format"),
  ethnicity: z.string().min(1, "Ethnicity is required"),
  gender: z.string().min(1, "Gender is required"),
  nhi_number: z.string().optional(),
})

type FormType = z.infer<typeof formSchema>

// ✅ Form Component
export default function InfoForm() {
    const {setStep} = useStepper()
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      phone_no: "",
      email: "",
      ethnicity: "",
      gender: "",
      nhi_number: "",
    },
  })

  function onSubmit(data: FormType) {
    console.log(data)
  }

  return (
    <div className='mb-4 space-y-3 w-full'>
    <h3 className='text-[24px] text-black-primary font-bold'>
                Select Time Slot
            </h3>

    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-[#F0FAFB] p-7 rounded-lg flex flex-col gap-5"
      >
        <>
          <FormFieldWrapper control={form.control} name="first_name" label="First Name">
            {(field) => (
              <Input {...field} className="bg-white rounded-lg border border-[#E2E6EA]" placeholder="Enter first name" />
            )}
          </FormFieldWrapper>

          <FormFieldWrapper control={form.control} name="last_name" label="Last Name">
            {(field) => (
              <Input {...field} className="bg-white rounded-lg border border-[#E2E6EA]" placeholder="Enter last name" />
            )}
          </FormFieldWrapper>

          <FormFieldWrapper control={form.control} name="phone_no" label="Phone Number">
            {(field) => (
              <Input {...field} className="bg-white rounded-lg border border-[#E2E6EA]" placeholder="Enter phone number" />
            )}
          </FormFieldWrapper>

          <FormFieldWrapper control={form.control} name="email" label="Email Address">
            {(field) => (
              <Input {...field} className="bg-white rounded-lg border border-[#E2E6EA]" placeholder="Enter email" />
            )}
          </FormFieldWrapper>

          <FormFieldWrapper control={form.control} name="ethnicity" label="Ethnicity">
            {(field) => (
              <Input {...field} className="bg-white rounded-lg border border-[#E2E6EA]" placeholder="Enter ethnicity" />
            )}
          </FormFieldWrapper>

          <FormFieldWrapper control={form.control} name="gender" label="Gender">
            {(field) => (
              <Input {...field} className="bg-white rounded-lg border border-[#E2E6EA]" placeholder="Enter gender" />
            )}
          </FormFieldWrapper>

          <FormFieldWrapper control={form.control} name="nhi_number" label="NHI Number">
            {(field) => (
              <Input {...field} className="bg-white rounded-lg border border-[#E2E6EA]" placeholder="Enter NHI number (optional)" />
            )}
          </FormFieldWrapper>
        </>
        <div className='flex gap-2 w-full'>

        <Button variant={"secondary"} type='button' className='flex-1' onClick={()=>{
            setStep("time-slot")
        }}>
            Back
        </Button>

        <Button type="submit" className="flex-1"
        onClick={()=>{
            setStep("info")
        }}
        >
          Submit
        </Button>
        </div>
      </form>
    </Form>
    </div>
  )
}

// ✅ Generic Wrapper Component
type FormFieldLayoutProps = {
  label?: string
  description?: string
  formItemClassName?: string
  labelClassName?: string
  descriptionClassName?: string
}

type FormFieldProps<T extends FieldValues> = {
  control: Control<T>
  name: Path<T>
  children: React.ReactNode | ((field: FieldValues) => React.ReactNode)
} & FormFieldLayoutProps

function FormFieldWrapper<T extends FieldValues>({
  label,
  control,
  name,
  formItemClassName,
  children,
  description,
  descriptionClassName,
  labelClassName,
}: FormFieldProps<T>) {
  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem className={cn(formItemClassName, "flex flex-col gap-2")}>
          {label && (
            <FormLabel className={cn("text-black-primary text-[14px] font-medium", labelClassName)}>
              {label}
            </FormLabel>
          )}
          <FormControl>
            {typeof children === "function" ? children(field) : children}
          </FormControl>
          {description && (
            <FormDescription className={cn("text-muted-foreground text-xs", descriptionClassName)}>
              {description}
            </FormDescription>
          )}
          <FormMessage className="text-[12px] text-red-500 font-medium" />
        </FormItem>
      )}
    />
  )
}
