"use client"

import { EmptySearch } from "./empty-search"
import { EmptyFavourites } from "./empty-favourites"
import { EmptyBoard } from "./empty-board"

import { useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"
import { BoardCard } from "./board-card"

interface BoardListProps {
  orgId: string
  query: {
    search?: string
    favourites?: string
  }
}

export const BoardList = ({
    orgId,
    query,
}: BoardListProps) => {
    const data = useQuery(api.boards.get, {orgId})

    if(data === undefined){
        return (
            <div>
                Loading...
            </div>
        )
    }

    if (!data?.length && query.search) {
        return(
            <EmptySearch/>
        )
    }

    if(!data?.length && query.favourites) {
        return(
            <EmptyFavourites/>
        )
    }

    if(!data?.length) {
        return(
            <EmptyBoard/>
        )
    }

  return (
    <div>
        <h2 className="text-2xl">
            {query.favourites ? "Favourite Boards" : "Team Boards"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 mt-4 pb-8">
            {
                data.map((board) => (
                    <BoardCard
                        key={board._id}
                        id={board._id}
                        title={board.title}
                        imageUrl={board.imageUrl}
                        authorId={board.authorId}
                        authorName={board.authorName}
                        createdAt={board._creationTime}
                        orgId={orgId}
                        isFavourite={false}
                    />
                ))
            }
        </div>
    </div>
  )
}
