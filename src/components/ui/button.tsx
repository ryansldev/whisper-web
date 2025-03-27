import { LoaderCircle } from 'lucide-react';
import type { ComponentProps } from 'react';
import { useFormStatus } from 'react-dom';

interface ButtonProps extends ComponentProps<'button'> {}

export function Button(props: ButtonProps) {
  const { pending } = useFormStatus()

  return (
    <button
      {...props}
      className={`group ${props.className} dark:bg-neutral-900 rounded-xl px-5 h-12 font-semibold w-full transition-colors
      duration-300 border dark:border-neutral-800 flex items-center justify-center gap-3
      ${props.disabled ? "dark:bg-neutral-900 dark:text-neutral-500 cursor-not-allowed" : "cursor-pointer dark:hover:bg-neutral-800"}
      ${pending ? "dark:bg-neutral-900 dark:text-neutral-500 cursor-progress" : ""}`}
    />
  )
}

interface ButtonIconWrapperProps extends ComponentProps<"div"> {}

export function ButtonIconWrapper(props: ButtonIconWrapperProps) {
  const { pending } = useFormStatus()

  return (
    <div className="h-5 w-5 flex items-center justify-center" {...props}>
      {!pending ? props.children : <LoaderCircle className="animate-spin" />}
    </div>
  )
}
