import type { ComponentProps } from "react";
import { useFormStatus } from "react-dom";
import { twMerge } from "tailwind-merge";

interface TextareaRootProps extends ComponentProps<"div"> {}

export function TextareaRoot({ className, ...props }: TextareaRootProps) {
  const { pending } = useFormStatus()

  return (
    <div
      className={twMerge("group flex gap-3 flex-1 dark:bg-neutral-900 border dark:border-neutral-800 rounded-xl px-5 py-2 focus-within:outline-2 dark:outline-neutral-500 aria-disabled:cursor-not-allowed", className)}
      aria-disabled={pending || props["aria-disabled"]}
      {...props}
    />
  )
}

interface TextareaFieldProps extends ComponentProps<"textarea"> {}

export function TextareaField(props: TextareaFieldProps) {
  return (
    <textarea
      className={`
      flex-1 outline-0 resize-none dark:placeholder:text-neutral-500
      group-aria-disabled:dark:text-neutral-500
      group-aria-disabled:dark:placeholder:text-neutral-700
      group-aria-disabled:pointer-events-none
      `}
      rows={1} maxLength={150}
    {...props} />
  )
}
