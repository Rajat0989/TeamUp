import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface BoardCardFooterProps {
    title: string,
    authorLabel: string,
    createdAtLabel: string,
    isFavourite: boolean,
    onClick: () => void,
    disabled: boolean
}

export const BoardCardFooter = ({
    title,
    authorLabel,
    createdAtLabel,
    isFavourite,
    onClick,
    disabled
}: BoardCardFooterProps) => {
    return (
        <div className="relative bg-white p-3">
            <p className="text-lg truncate max-w-[calc(100%-20px)]" >
                {title}
            </p>
            <p className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground truncate">
                {authorLabel}, {createdAtLabel}
            </p>
            <button
            disabled={disabled}
            onClick={onClick}
            className={cn("opacity-0 group-hover:opacity-100 transition-opacity absolute top-3 right-3 text-muted-foreground hover:text-blue-600", disabled && "cursor-not-allowed opacity-75")}
            >
                <Star
                className={cn("w-6 h-6", isFavourite && "text-blue-600 fill-blue-600")}
                />
            </button>
        </div>
    )
}