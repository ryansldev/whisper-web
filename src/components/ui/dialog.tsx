import * as PrimitiveDialog from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { Button } from "./button";

export interface DialogRootProps extends PrimitiveDialog.DialogProps {}

export function DialogRoot(props: DialogRootProps) {
  return (
    <PrimitiveDialog.Root {...props} />
  );
}

interface DialogTriggerProps extends PrimitiveDialog.DialogTriggerProps {}

export function DialogTrigger(props: DialogTriggerProps) {
  return (
    <PrimitiveDialog.Trigger {...props} />
  )
}

interface DialogPortalProps extends PrimitiveDialog.DialogPortalProps {}

export function DialogPortal(props: DialogPortalProps) {
  return (
    <PrimitiveDialog.Portal {...props}>
      <PrimitiveDialog.Overlay className="fixed inset-0 bg-[rgba(0,0,0,0.5)] bg-opacity-50" />
      {props.children}
    </PrimitiveDialog.Portal>
  )
}

interface DialogContentProps extends PrimitiveDialog.DialogContentProps {}

export function DialogContent({ className, ...props }: DialogContentProps) {
  return (
    <PrimitiveDialog.Content className={twMerge("fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-[300px] bg-neutral-900 p-6 rounded-xl shadow-lg", className)} {...props}>
      <DialogClose asChild>
        <div className="absolute right-0 top-0 p-3">
          <Button className="w-8 h-8" variant="ghost" circle>
            <XIcon className="w-5 h-5" />
          </Button>
        </div>
      </DialogClose>
      {props.children}
    </PrimitiveDialog.Content>
  )
}

interface DialogTitleProps extends PrimitiveDialog.DialogTitleProps {}

export function DialogTitle(props: DialogTitleProps) {
  return (
    <PrimitiveDialog.Title {...props} />
  )
}

interface DialogDescriptionProps extends PrimitiveDialog.DialogDescriptionProps {}

export function DialogDescriptionProps(props: DialogDescriptionProps) {
  return (
    <PrimitiveDialog.Description {...props} />
  )
}

interface DialogCloseProps extends PrimitiveDialog.DialogCloseProps {}

export function DialogClose(props: DialogCloseProps) {
  return (
    <PrimitiveDialog.Close {...props} />
  )
}
