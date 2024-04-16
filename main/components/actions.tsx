"use client"

import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu"
import React from "react"
import { toast } from "sonner"

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Link2 } from "lucide-react"

interface ActionProps {
  children: React.ReactNode
  side?: DropdownMenuContentProps["side"]
  sideOffset?: DropdownMenuContentProps["sideOffset"]
  id: string
  title: string
}

export const Actions = ({
  children,
  side,
  sideOffset,
  id,
  title,
}: ActionProps) => {
  const oncopylink = () => {
    navigator.clipboard
      .writeText(`${window.location.origin}/board/${id}`)
      .then(() => toast.success("Link Copied"))
      .catch(() => toast.error("Failed to copy link"))
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        onClick={(e) => e.stopPropagation()}
        side={side}
        sideOffset={sideOffset}
        className="w-60"
      >
        <DropdownMenuItem 
        onClick={oncopylink}
        className="cursor-pointer p-3">
          <Link2 className="h-4 w-4 mr-2" />
          Copy Board Link
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
