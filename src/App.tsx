import { Lock, Mail } from "lucide-react"
import { Button, ButtonIconWrapper } from "./components/ui/button"
import { InputField, InputIcon, InputRoot } from "./components/ui/input"

function App() {
  async function onSubmit() {
    await new Promise(resolve => setTimeout(resolve, 500))
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8">      
      <div className="flex flex-col justify-center gap-3 w-full max-w-[90vw]">
        <h1 className="text-2xl font-bold">Botões</h1>
        <div className="flex items-center gap-3">
          <form action={onSubmit}>
            <Button type="submit" className="max-w-[150px]">
              <ButtonIconWrapper>
                <Lock className="w-full" />
              </ButtonIconWrapper>
              Segurança
            </Button>
          </form>

          <Button type="button" className="max-w-[150px]" disabled>
            Desabilitado
          </Button>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-3 w-full max-w-[90vw]">
        <h1 className="text-2xl font-bold">Inputs</h1>
        <div className="flex items-center gap-3">
          <form action={onSubmit} className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <InputRoot>
                <InputIcon>
                  <Mail />
                </InputIcon>
                <InputField type="email" placeholder="Digite seu e-mail" />
              </InputRoot>

              <InputRoot>
                <InputIcon>
                  <Lock />
                </InputIcon>
                <InputField type="password" placeholder="Digite sua senha" />
              </InputRoot>
              
              <InputRoot>
                <InputField type="text" placeholder="Digite seu nome" />
              </InputRoot>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <InputRoot aria-disabled>
                <InputIcon>
                  <Mail />
                </InputIcon>
                <InputField type="email" placeholder="Digite seu e-mail" />
              </InputRoot>
              
              <InputRoot aria-disabled>
                <InputField type="text" placeholder="Digite seu nome" />
              </InputRoot>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
