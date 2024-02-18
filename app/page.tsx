"use client";
import * as z from 'zod';
import {useForm} from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';
//import { SelectTrigger, SelectValue, Select, SelectContent, SelectItem } from '@/components/ui/select';
//import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


const formSchema = z.object({
  name: z.string().min(3).max(20),
  emailAddress: z.string().email(),
  phoneNumber:z.string().min(3).max(20),
  productName:z.string().min(3).max(20),
  quantity:z.string().min(1).max(2),
  price:z.string().min(1).max(3),
  paymenttype: z.enum(["Knet","Visa","COD"],{
    required_error: "You need to select a Payment method."}),
})


export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver:zodResolver(formSchema),
    defaultValues:{
      name:"",
      emailAddress: "",
      phoneNumber: "",
      productName: "",
      quantity: "",
      price: "",
  
    }
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({values});
  }

  return (
    <main className="flex min-h-screen flex-col items-center gap-[50px] p-24">
      <h1 className='font-bold text-2xl'>Payment Form Example</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className='max-w-md w-full flex flex-col gap-4'>

          <FormField control={form.control} name="name" render={({field}) => {
            return <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input 
                  placeholder='Name' 
                  {...field}
                />
              </FormControl>
              <FormMessage/>
            </FormItem>
          }}/>

          <FormField control={form.control} name="emailAddress" render={({field}) => {
            return <FormItem>
              <FormLabel>Email Address:</FormLabel>
              <FormControl>
                <Input 
                  placeholder='Email address' 
                  
                  {...field}
                />
              </FormControl>
              <FormMessage/>
            </FormItem>
          }}/>

          <FormField control={form.control} name="phoneNumber" render={({field}) => {
            return <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input 
                  placeholder='Phone Number' 
                 
                  {...field}
                />
              </FormControl>
              <FormMessage/>
            </FormItem>
          }}/>
          <FormField control={form.control} name="productName" render={({field}) => {
            return <FormItem>
              <FormLabel>Product Name</FormLabel>
              <FormControl>
                <Input 
                  placeholder='Product Name' 
              
                  {...field}
                />
              </FormControl>
              <FormMessage/>
            </FormItem>
          }}/>
          <FormField control={form.control} name="quantity" render={({field}) => {
            return <FormItem>
              <FormLabel>Quantity</FormLabel>
              <FormControl>
                <Input 
                  placeholder='Quantity' 
              
                  {...field}
                />
              </FormControl>
              <FormMessage/>
            </FormItem>
          }}/>
          <FormField control={form.control} name="price" render={({field}) => {
            return <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input 
                  placeholder='Price' 
              
                  {...field}
                />
              </FormControl>
              <FormMessage/>
            </FormItem>
          }}/>
         
          <FormField
          control={form.control}
          name="paymenttype"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Select payment method:</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Knet" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Knet
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Visa" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Visa
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="COD" />
                    </FormControl>
                    <FormLabel className="font-normal">COD</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

          <Button type='submit'>
            Submit
          </Button>
        </form>
      </Form>
    </main>
  );
}
