"use client"

import Link from "next/link"
import Image from "next/image"
import { Overlay } from "./overlay"
import { formatDistanceToNow } from "date-fns"
import { useAuth } from "@clerk/nextjs"
import { BoardCardFooter } from "./footer"
import { Skeleton } from "@/components/ui/skeleton"
import { Actions } from "@/components/actions"
import { MoreHorizontal } from "lucide-react"
interface BoardCardProps {
  id: string
  title: string
  authorName: string
  authorId: string
  imageUrl: string
  orgId: string
  createdAt: number
  isFavourite: boolean
}

export const BoardCard = ({
  id,
  title,
  authorName,
  authorId,
  imageUrl,
  orgId,
  createdAt,
  isFavourite,
}: BoardCardProps) => {
  const { userId } = useAuth()
  const authorLabel = authorId === userId ? "You" : authorName
  const createdLabel = formatDistanceToNow(createdAt, { addSuffix: true })
  return (
    <Link href={`/board/${id}`}>
      <div className="group aspect-[100/127] border rounded-xl flex flex-col justify-between overflow-hidden">
        <div className="relative flex-1 bg-amber-50">
          <Image src={imageUrl} alt="Doodle" layout="fill" objectFit="cover" />
          <Overlay />
          <Actions 
            id={id}
            title={title}
            side="right"
          >
            <button className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-2 outline-none">
              <MoreHorizontal className="text-white opacity-75 hover:opacity-100 transition-opacity"/></button>
          </Actions>
        </div>
        <BoardCardFooter
            isFavourite={isFavourite}
            title={title}
            authorLabel={authorLabel}
            createdAtLabel={createdLabel}
            onClick={() => {}}
            disabled={false}
        />
      </div>
    </Link>
  )
}

BoardCard.Skeleton = function BoardCardSeleton(){
  return(
    <div className="group aspect-[100/127] rounded-xl flex flex-col justify-between overflow-hidden">
      <Skeleton className="h-full w-full"/>
    </div>
  )
}