"use client"

import { Plus } from "lucide-react"
import { CreateOrganization } from "@clerk/nextjs"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Hint } from "@/components/hint"

export const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <Hint
            label="Create a new organization"
            side="right"
            align="start"
            sideOffset={20}
          >
            <button className="h-full w-full flex justify-center items-center opacity-60 hover:opacity-100 transition ease-in-out bg-white/15 rounded-lg">
              <Plus className="text-white" />
            </button>
          </Hint>
        </div>
      </DialogTrigger>
      <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  )
}
