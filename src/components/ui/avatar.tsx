'use client'

import { LoaderCircle, User } from "lucide-react";
import { type ComponentProps, useState } from "react";
import { twMerge } from "tailwind-merge";

interface AvatarProps extends Omit<ComponentProps<"div">, "children"> {
  src?: string;
  alt?: string;
}

export function Avatar({ className, src, alt, ...props }: AvatarProps) {
  const [pending, setPending] = useState(!!src)

  return (
    <div
      className={twMerge(`
        dark:bg-neutral-900 border dark:border-neutral-800 w-12 h-12
        rounded-full flex items-center justify-center
        aria-disabled:text-neutral-600 aria-disabled:border-0
        overflow-hidden
      `, className)}
      {...props}
      aria-disabled={pending || props["aria-disabled"]}
    >
      { src ? <img onLoad={() => setPending(false)} className="object-cover" src={src} alt={alt ?? "Avatar"} /> : <User className="w-5 h-5" /> }
      {pending && <LoaderCircle className="animate-spin" />}
    </div>
  )
}
