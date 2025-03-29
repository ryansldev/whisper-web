import { Check } from "lucide-react";
import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface CheckboxRootProps extends ComponentProps<"div"> {}

export function CheckboxRoot({ className, ...props }: CheckboxRootProps) {
  return <div className={twMerge("flex items-center gap-2", className)} {...props} />
}

interface CheckboxFieldProps extends ComponentProps<"input"> {}

export function CheckboxField({ className, ...props }: CheckboxFieldProps) {
  return (
    <>
      <input type="checkbox"
      className={"hidden peer"} {...props} />
      <div className={twMerge("flex items-center justify-center w-6 h-6 border-2 dark:border-neutral-700 dark:bg-neutral-800 rounded-md transition-all duration-200 peer-checked:bg-neutral-600 peer-checked:dark:border-neutral-500 [&>*:first-child]:opacity-0 peer-checked:[&>*:first-child]:opacity-100", className)}>
        <Check className="flex-1 transition-opacity duration-200" />
      </div>
    </>
  )
}

interface CheckboxLabelProps extends ComponentProps<"label"> {}

export function CheckboxLabel({ className, ...props }: CheckboxLabelProps) {
  return (
    <label className={twMerge("flex items-center gap-2 cursor-pointer", className)} {...props}>
      {props.children}
    </label>
  )
}
