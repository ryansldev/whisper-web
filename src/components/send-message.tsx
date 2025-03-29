import { Send } from "lucide-react"
import { Button, ButtonIconWrapper } from "./ui/button"
import { TextareaField, TextareaRoot } from "./ui/textarea"

interface SendMessageProps {
  to?: string;
}

export default function SendMessage({ to }: SendMessageProps) {
  async function onSubmit() {
    await new Promise(resolve => setTimeout(resolve, 500))
  }

  return (
    <form action={onSubmit}>
      <TextareaRoot>
        <TextareaField placeholder={`Digite sua mensagem para @${to}`} />

        <Button circle secondary>
          <ButtonIconWrapper>
            <Send />
          </ButtonIconWrapper>
        </Button>
      </TextareaRoot>
    </form>
  )
}