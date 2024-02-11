
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const EmptyBoard = () => {
    return(
        <div className="h-full flex flex-col items-center justify-center">
            <Image
                src="/"
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
                <Button size="lg">
                    Create Board
                </Button>
            </div>
        </div>
    )
}