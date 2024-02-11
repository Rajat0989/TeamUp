
import Image from "next/image";

export const EmptySearch = () => {
    return(
        <div className="h-full flex flex-col items-center justify-center">
            <Image
                src="/"
                alt=""
                height={200}
                width={200}
            />
            <h2 className="text-2xl font-semibold mt-6">
                No Boards Found
            </h2>
            <p className="text-muted-foreground mt-2">
                Try searching something else
            </p>
        </div>
    )
}