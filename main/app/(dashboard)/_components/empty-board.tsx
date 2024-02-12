"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";
import { useApiMutation } from "@/hooks/use-api-mutation"
import { toast } from "sonner";

export const EmptyBoard = () => {
    const {mutate,pending} = useApiMutation(api.board.create)
    const {organization} = useOrganization()
    
    const onClick = () => {

        if(!organization) return
        mutate({
            orgId: organization.id,
            title: "Untitled"
        })
        .then((id) => {
            toast.success("Board created")
        })
        .catch((error) => {
            toast.error("Failed to create board")
        })
    }
    return(
        <div className="h-full flex flex-col items-center justify-center">
            <Image
                src="/elements.svg"
                alt=""
                height={200}
                width={200}
            />
            <h2 className="text-2xl font-semibold mt-6">
                Create a new board
            </h2>
            <p className="text-muted-foreground mt-2">
                Start by creating a new board
            </p>
            <div className="mt-6">
                <Button disabled={pending} onClick={onClick} size="lg">
                    Create Board
                </Button>
            </div>
        </div>
    )
}