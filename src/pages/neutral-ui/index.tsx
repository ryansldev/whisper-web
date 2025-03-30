import { CheckboxField, CheckboxLabel, CheckboxRoot } from "@components/ui/checkbox"
import { SwitchField, SwitchLabel } from "@components/ui/switch"
import { Lock, Mail, Send } from "lucide-react"
import { Avatar } from "../../components/ui/avatar"
import { Button, ButtonIconWrapper } from "../../components/ui/button"
import { InputField, InputIcon, InputRoot } from "../../components/ui/input"
import { TextareaField, TextareaRoot } from "../../components/ui/textarea"

export function NeutralUiPage() {
  async function onSubmit() {
    await new Promise(resolve => setTimeout(resolve, 500))
  }

  return (
    <form action={onSubmit} className="flex flex-col items-center justify-center min-h-screen gap-8 py-6">      
      {/* BUTTONS */}
      <div id="buttons" className="flex flex-col justify-center gap-3 w-full max-w-[90vw]">
        <h1 className="text-2xl font-bold">Botões</h1>
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-3 sm:flex-none flex-1">
            <Button type="submit" className="w-full sm:max-w-[150px]">
              <ButtonIconWrapper>
                <Lock className="w-full" />
              </ButtonIconWrapper>
              Segurança
            </Button>

            <Button type="submit" circle>
              <ButtonIconWrapper>
                <Send />
              </ButtonIconWrapper>
            </Button>
          </div>

          <div className="flex items-center gap-3 sm:flex-none flex-1">
            <Button type="submit" className="w-full sm:max-w-[150px]" disabled>
              Desabilitado
            </Button>

            <Button type="submit" circle disabled>
              <ButtonIconWrapper>
                <Send />
              </ButtonIconWrapper>
            </Button>
          </div>
        </div>
      </div>

      {/* INPUTS */}
      <div id="inputs" className="flex flex-col justify-center gap-3 w-full max-w-[90vw]">
        <h1 className="text-2xl font-bold">Inputs</h1>
        <div className="flex items-center gap-3">
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <InputRoot>
                <InputIcon>
                  <Mail />
                </InputIcon>
                <InputField type="email" placeholder="Digite seu e-mail" autoComplete="email" />
              </InputRoot>

              <InputRoot>
                <InputIcon>
                  <Lock />
                </InputIcon>
                <InputField type="password" placeholder="Digite sua senha" autoComplete="current-password" />
              </InputRoot>

              <InputRoot>
                <InputField type="text" placeholder="Digite seu nome" autoComplete="name" />
              </InputRoot>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <InputRoot aria-disabled>
                <InputIcon>
                  <Mail />
                </InputIcon>
                <InputField type="email" placeholder="Digite seu e-mail" autoComplete="email" />
              </InputRoot>
              
              <InputRoot aria-disabled>
                <InputField type="text" placeholder="Digite seu nome" autoComplete="name" />
              </InputRoot>
            </div>
          </div>
        </div>
      </div>

      {/* TEXTAREA */}
      <div id="textarea" className="flex flex-col justify-center gap-3 w-full max-w-[90vw]">
        <h1 className="text-2xl font-bold">Textarea</h1>
        <div className="flex items-center gap-3">
          <TextareaRoot>
            <TextareaField placeholder="Digite aqui sua mensagem" />

            <Button secondary circle className="max-h-10 max-w-10">
              <ButtonIconWrapper>
                <Send />
              </ButtonIconWrapper>
            </Button>
          </TextareaRoot>
        </div>
      </div>

      {/* AVATAR */}
      <div id="avatar" className="flex flex-col justify-center gap-3 w-full max-w-[90vw]">
        <h1 className="text-2xl font-bold">Avatar</h1>
        <div className="flex items-center gap-3">
          <Avatar src="https://thispersondoesnotexist.com/" />
          <Avatar />
          <span>Loading is based on src</span>
        </div>
      </div>

      {/* CHECKBOX */}
      <div id="checkbox" className="flex flex-col justify-center gap-3 w-full max-w-[90vw]">
        <h1 className="text-2xl font-bold">Checkbox</h1>
        <div className="flex items-center gap-3">
          <CheckboxRoot>
            <CheckboxLabel htmlFor="checkbox-field">
              <CheckboxField id="checkbox-field" />
              Checkbox
            </CheckboxLabel>
          </CheckboxRoot>
        </div>
      </div>

      {/* Switch */}
      <div id="switch" className="flex flex-col justify-center gap-3 w-full max-w-[90vw]">
        <h1 className="text-2xl font-bold">Switch</h1>
        <div className="flex items-center gap-3">
          <SwitchLabel>
            <SwitchField>
              Aasdasd
            </SwitchField>
          </SwitchLabel>
        </div>
      </div>
    </form>
  )
}
