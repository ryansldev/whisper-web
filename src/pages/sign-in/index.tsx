import { Button, ButtonIconWrapper } from "@components/ui/button"
import { InputField, InputIcon, InputRoot } from "@components/ui/input"
import { Lock, User } from "lucide-react"
import { useActionState } from "react"
import { Link } from "react-router"
import { signInUser } from "./action"

export function SignInPage() {
  const [result, handleSignInUser] = useActionState(signInUser, null)

  return (
    <div className="flex flex-col gap-3 items-center justify-center h-screen max-w-[400px] w-full mx-auto">
      <div className="w-full items-start">
        <h1 className="text-2xl font-bold">Sign in</h1>
      </div>
      <form action={handleSignInUser} method="POST" className="flex flex-col gap-3 w-full">
        <InputRoot error={result?.error?.login?.[0]}>
          <InputIcon>
            <User />
          </InputIcon>
          <InputField defaultValue={result?.data?.login?.toString()} name="login" placeholder="Digite seu nome de usuário" autoComplete="username" />
        </InputRoot>

        <InputRoot error={result?.error?.password?.[0]}>
          <InputIcon>
            <Lock />
          </InputIcon>
          <InputField defaultValue={result?.data?.password?.toString()} name="password" type="password" placeholder="Digite sua senha" autoComplete="current-password" />
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