"use client"
import { useOrganization } from "@clerk/nextjs"
import EmptyOrg from "./_components/empty-org"
import { BoardList } from "./_components/board-list"

interface PageProps {
  searchParams: {
    search?: string
    favourites?: string
  }
}

const Page = ({ searchParams }: PageProps) => {
  const { organization } = useOrganization()

  return (
    <div className="h-screen flex-1 ">
      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList 
        orgId={organization.id} 
        query={searchParams} />
      )}
    </div>
  )
}

export default Page
