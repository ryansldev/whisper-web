import { LoaderCircle } from 'lucide-react';
import type { ComponentProps } from 'react';
import { useFormStatus } from 'react-dom';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ComponentProps<'button'> {}

export function Button({ className, ...props}: ButtonProps) {
  const { pending } = useFormStatus()

  return (
    <button
      {...props}
      className={twMerge(`group dark:bg-neutral-800 rounded-xl px-5 h-12 font-semibold w-full transition-colors
      duration-300 border dark:border-neutral-700 disabled:border-neutral-900 flex items-center justify-center gap-3 focus:outline-2 dark:outline-neutral-400
      disabled:dark:bg-neutral-900 disabled:dark:text-neutral-600 disabled:cursor-not-allowed cursor-pointer dark:hover:bg-neutral-700
      `, className)}
      disabled={pending || props.disabled}
    />
  )
}

interface ButtonIconWrapperProps extends ComponentProps<"div"> {}

export function ButtonIconWrapper(props: ButtonIconWrapperProps) {
  const { pending } = useFormStatus()

  return (
    <div className={`h-5 w-5 flex items-center justify-center ${!pending && !props.children ? "hidden" : ""}`}  {...props}>
      {!pending ? props.children : <LoaderCircle className="animate-spin" />}
    </div>
  )
}
