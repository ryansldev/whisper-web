import { Button, ButtonIconWrapper } from "@components/ui/button"
import { InputField, InputIcon, InputRoot } from "@components/ui/input"
import { Lock, User } from "lucide-react"
import { Link } from "react-router"

export function SignInPage() {
  async function onSubmit() {
    await new Promise(resolve => setTimeout(resolve, 500))
  }

  return (
    <div className="flex flex-col gap-3 items-center justify-center h-screen max-w-[400px] w-full mx-auto">
      <div className="w-full items-start">
        <h1 className="text-2xl font-bold">Sign in</h1>
      </div>
      <form className="flex flex-col gap-3 w-full" action={onSubmit}>
        <InputRoot>
          <InputIcon>
            <User />
          </InputIcon>
          <InputField placeholder="Digite seu nome de usuário" />
        </InputRoot>

        <InputRoot>
          <InputIcon>
            <Lock />
          </InputIcon>
          <InputField type="password" placeholder="Digite sua senha" />
        </InputRoot>

        <Button>
          Enviar
          <ButtonIconWrapper />
        </Button>
        <Link to="/sign-up">
          <span className="dark:text-neutral-400">Do not have a account?</span>
        </Link>
      </form>
    </div>
  )
}