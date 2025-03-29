import type { ComponentProps } from "react";
import { Link } from "react-router";
import { twMerge } from "tailwind-merge";
import { Avatar } from "./ui/avatar";
import { TextareaField, TextareaRoot } from "./ui/textarea";

interface MessageProps extends ComponentProps<"textarea"> {
  avatarHref?: string;
  avatarSrc?: string;
  content: string;
}

export function Message({ content, avatarSrc, avatarHref, className }: MessageProps) {
  return (
    <TextareaRoot className={twMerge("items-center", className)}>
      {avatarHref
        ? (
          <Link to={avatarHref} target="_blank">
            <Avatar src={avatarSrc} secondary />
          </Link>
        ) : <Avatar src={avatarSrc} secondary />
      }
      <TextareaField value={content} readOnly placeholder="Digite sua mensagem" />
    </TextareaRoot>
  )
}