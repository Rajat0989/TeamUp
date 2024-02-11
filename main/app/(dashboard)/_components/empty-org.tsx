import Image from "next/image"
import { CreateOrganization } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export default function EmptyOrg() {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/" alt="" height={200} width={200} />
      <h2 className="text-2xl font-semibold mt-4">Welcome to NextBoard</h2>
      <p className="text-muted-foreground mt-2">
        Create a new organization to get started
      </p>
      <div className="mt-4">
        <Dialog>
          <DialogTrigger asChild>
            <div className="">
              <Button size="lg">Create Organization</Button>
            </div>
          </DialogTrigger>
          <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
            <CreateOrganization />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
