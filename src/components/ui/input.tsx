import type { ComponentProps } from "react";
import { useFormStatus } from "react-dom";

interface InputRootProps extends ComponentProps<"div"> {
  error?: string;
}

export function InputRoot({ error, ...props }: InputRootProps) {
  const { pending } = useFormStatus()
  
  return (
    <div className="flex flex-col gap-0">
      <div
        data-error={!!error}
        className={`
          peer group flex flex-1 items-center gap-2 border dark:border-neutral-800
          rounded-xl h-12 px-5 focus-within:outline-2
          dark:outline-neutral-400 dark:bg-neutral-900
          aria-disabled:dark:border-neutral-900
          aria-disabled:dark:bg-neutral-950
          aria-disabled:cursor-not-allowed
          data-[error=true]:border-danger
          data-[error=true]:outline-0
          min-h-12 max-h-12
        `}
        aria-disabled={pending || props["aria-disabled"]}
        {...props}
      />
      {error && <span className="mt-1 mb-2 text-danger peer-aria-disabled:hidden">{error}</span>}
    </div>
  )
}

interface InputFieldProps extends ComponentProps<"input"> {}

export function InputField(props: InputFieldProps) {
  return (
    <input
      className={`
        flex-1 outline-0 dark:placeholder:text-neutral-500
        group-aria-disabled:dark:text-neutral-500
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
      text-neutral-500
      group-aria-disabled:dark:!text-neutral-700
      group-focus-within:text-neutral-300
      group-[&:not(:has(input:placeholder-shown))]:text-gray-100
      group-data-[error=true]:!text-danger
      "
      {...props}
    />
  )
}
