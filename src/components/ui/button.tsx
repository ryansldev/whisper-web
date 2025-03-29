import { LoaderCircle } from 'lucide-react';
import type { ComponentProps } from 'react';
import { useFormStatus } from 'react-dom';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ComponentProps<'button'> {
  circle?: boolean;
  secondary?: boolean;
}

export function Button({ className, circle, secondary, ...props}: ButtonProps) {
  const { pending } = useFormStatus()

  console.log(circle)

  return (
    <button
      {...props}
      className={twMerge(`group dark:bg-neutral-800 rounded-xl font-semibold flex-1 h-12 transition-colors
      duration-300 border dark:border-neutral-700 disabled:border-neutral-900 flex items-center justify-center gap-3 focus:outline-2 dark:outline-neutral-400
      disabled:dark:bg-neutral-900 disabled:dark:text-neutral-600 disabled:cursor-not-allowed cursor-pointer dark:hover:bg-neutral-700
      `, !circle ? "px-5" : "max-w-12 max-h-12 rounded-full", !!secondary && "dark:bg-neutral-700 dark:border-neutral-600 dark:hover:bg-neutral-600 dark:disabled:bg-neutral-800 dark:disabled:text-neutral-500 dark:disabled:border-neutral-800", className)}
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
