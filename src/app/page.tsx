import { ModeToggle } from "@/components/theme-toggle"
export default function Home() {
  return (
    <div className="container mx-auto py-5 px-8">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-4xl">Link-Card</h1>
        <ModeToggle />
      </div>
    </div>
  )
}
