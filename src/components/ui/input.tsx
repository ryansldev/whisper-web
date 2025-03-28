import type { ComponentProps } from "react";

interface InputRootProps extends ComponentProps<"div"> {}

export function InputRoot(props: InputRootProps) {
  return (
    <div
      className={`
        group flex flex-1 items-center gap-2 border dark:border-neutral-800
        rounded-xl h-12 px-5 focus-within:outline-2
        dark:outline-neutral-400 dark:bg-neutral-900
        aria-disabled:dark:border-neutral-900
        aria-disabled:dark:bg-neutral-950
        aria-disabled:cursor-not-allowed
      `}
      {...props}
    />
  )
}

interface InputFieldProps extends ComponentProps<"input"> {}

export function InputField(props: InputFieldProps) {
  return (
    <input
      className={`
        flex-1 outline-0 dark:placeholder:text-neutral-500
        group-aria-disabled:dark:text-neutral-700
        group-aria-disabled:dark:placeholder:text-neutral-700
        group-aria-disabled:pointer-events-none
      `}
      {...props}
    />
  )
}

interface InputIconProps extends ComponentProps<"span"> {}

export function InputIcon(props: InputIconProps) {
  return (
    <span
      className="flex items-center justify-center w-5 h-5
      text-neutral-500 duration-300 transition-colors
      group-aria-disabled:dark:text-neutral-700
      group-focus-within:text-neutral-300
      "
      {...props}
    />
  )
}
