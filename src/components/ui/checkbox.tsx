import { Check } from "lucide-react";
import type { ComponentProps } from "react";
import { useFormStatus } from "react-dom";
import { twMerge } from "tailwind-merge";

interface CheckboxFieldProps extends ComponentProps<"input"> {}

export function CheckboxField({ className, ...props }: CheckboxFieldProps) {
  return (
    <>
      <input type="checkbox" className="hidden peer" {...props} />
      <div className={twMerge("flex items-center justify-center w-6 h-6 border-2 dark:border-neutral-700 dark:bg-neutral-800 rounded-md transition-all duration-200 peer-checked:bg-neutral-500 peer-checked:dark:border-neutral-500 peer-checked:dark:border-1 [&>*:first-child]:opacity-0 peer-checked:[&>*:first-child]:opacity-100", className)}>
        <Check className="flex-1 transition-opacity duration-200 text-neutral-100" />
      </div>
    </>
  )
}

interface CheckboxLabelProps extends ComponentProps<"label"> {}

export function CheckboxLabel({ className, ...props }: CheckboxLabelProps) {
  const { pending } = useFormStatus()

  return (
    <label aria-disabled={pending || props["aria-disabled"]} className={twMerge("group flex items-center gap-2 aria-disabled:opacity-40 aria-disabled:pointer-events-none aria-disabled:cursor-not-allowed cursor-pointer", className)} {...props}>
      {props.children}
    </label>
  )
}
