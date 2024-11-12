import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar";
import { cn } from "@/src/lib/utils";
import Image from "next/image";

interface ProjectAvatarProps {
    image?: string;
    name: string;
    className?: string;
    fallbackClassName?: string
}

export const ProjectAvatar = ({
    image,
    name,
    className,
    fallbackClassName
}: ProjectAvatarProps) => {
    if (image) {
        return (
            <div className={cn("size-5 relative rounded-md overflow-hidden", className)}>
                <Image src={image} alt={name} fill className="object-cover" />
            </div>
        )
    }

    return (
        <Avatar className={cn("size-5 rounded-none", className)}>
            <AvatarFallback className={cn(
                "text-white bg-blue-600 font-semibold text-sm uppercase",
                fallbackClassName
            )}>
                {name[0]}
            </AvatarFallback>
        </Avatar>
    )
}