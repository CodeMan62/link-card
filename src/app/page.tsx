import { ProfileForm } from "@/components/forms/profile-form"
import SomethingForm from "@/components/forms/something-form"
import { ModeToggle } from "@/components/theme-toggle" 
export default function Home() {
  return (
    <div>
      <ModeToggle />
      <ProfileForm />
      <SomethingForm />
    </div>
  )
}
