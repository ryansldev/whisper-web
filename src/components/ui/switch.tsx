import type { ComponentProps } from "react";
import { useFormStatus } from "react-dom";
import { twMerge } from "tailwind-merge";

interface SwitchLabelProps extends ComponentProps<"label"> {}

export function SwitchLabel({ className, ...props }: SwitchLabelProps) {
  const { pending } = useFormStatus()

  return (
    <label aria-disabled={pending || props["aria-disabled"]} className={twMerge("group flex items-center gap-3 cursor-pointer aria-disabled:pointer-events-none aria-disabled:text-neutral-600 aria-disabled:cursor-not-allowed", className)} {...props} />
  )
}

interface SwitchFieldProps extends Omit<ComponentProps<"input">, "type"> {}

export function SwitchField({ className, ...props }: SwitchFieldProps) {
  return (
    <>
      <input type="checkbox" className="sr-only peer" {...props} />
      <div className={twMerge(`
        border-1 dark:border-neutral-700 w-12 h-6 flex items-center
        dark:bg-neutral-800 dark:peer-checked:bg-neutral-500 rounded-full
        p-1 transition-transform duration-300 peer-checked:[&>*:first-child]:translate-x-6
        peer-checked:[&>*:first-child]:bg-neutral-50 peer-checked:border-0
        group-aria-disabled:opacity-50
        group-aria-disabled:[&>*:first-child]:bg-neutral-400
        group-aria-disabled:border-0
      `, className)}>
        <div className="w-5 h-5 bg-neutral-300 rounded-full shadow-md -translate-x-1 transform transition-transform" />
      </div>
    </>
  )
}
