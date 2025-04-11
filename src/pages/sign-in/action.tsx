import { z } from "zod"

const signInUserPayloadSchema = z.object({
  login: z.string().min(3, { message: "O login deve ter pelo menos 3 caracteres"}),
  password: z.string().min(8, { message: "A senha deve ter pelo menos 8 caracteres"})
})

type SignInUserPayloadSchema = z.infer<typeof signInUserPayloadSchema>

export async function signInUser(_: unknown, formData: FormData) {
  const data = {
    login: formData.get("login"),
    password: formData.get("password")
  }

  await new Promise(resolve => setTimeout(resolve, 1000))

  const result = signInUserPayloadSchema.safeParse(data)

  if(!result.success) {
    return { error: result.error.flatten().fieldErrors, data }
  }

  return { message: "Sucesso!" }
}