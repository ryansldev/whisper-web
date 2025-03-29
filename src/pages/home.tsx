import { Message } from "@components/message";

export function HomePage() {
  return (
    <div className="p-6 flex flex-col gap-3">
      <Message
        avatarHref="https://github.com/"
        avatarSrc="https://avatars.githubusercontent.com/u/48864296?v=4"
        content="Esta é uma mensagem identificada"
      />

      <Message
        content="Esta é uma mensagem identificada"
      />
    </div>
  )
}