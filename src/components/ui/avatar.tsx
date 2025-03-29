'use client'

import { LoaderCircle, User } from "lucide-react";
import { type ComponentProps, useState } from "react";
import { Link } from "react-router";
import { twMerge } from "tailwind-merge";

interface AvatarProps extends Omit<ComponentProps<"div">, "children"> {
  src?: string;
  alt?: string;
  secondary?: boolean;
}

export function Avatar({ className, src, alt, secondary, ...props }: AvatarProps) {
  const [pending, setPending] = useState(!!src)

  return (
    <div
      className={twMerge(`
        dark:bg-neutral-900 border dark:border-neutral-800 w-12 h-12
        rounded-full flex items-center justify-center
        aria-disabled:text-neutral-600 aria-disabled:border-0
        overflow-hidden
      `, secondary && "dark:bg-neutral-800 dark:border-neutral-700", className)}
      aria-disabled={pending || props["aria-disabled"]}
      {...props}
    >
      { src ? <img onLoad={() => setPending(false)} className="object-cover" src={src} alt={alt ?? "Avatar"} /> : <User className="w-5 h-5" /> }
      {pending && <LoaderCircle className="animate-spin" />}
    </div>
  )
}
