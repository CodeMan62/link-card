
"use client"
import Form from "next/form"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
export default function SomethingForm(){
  return (
    <Form action="/">
      <Input type="Name" id="name" placeholder="John Doe" />
      <Input type="url" id="url" placeholder="https://example.com" />
      <Textarea placeholder="Tell about yourself in brief..."/>
    </Form>
  )
}
