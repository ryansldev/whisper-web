import { Lock } from "lucide-react"
import { Button, ButtonIconWrapper } from "./components/ui/button"

function App() {
  async function onSubmit() {
    await new Promise(resolve => setTimeout(resolve, 500))
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form action={onSubmit}>
        <Button type="submit" className="max-w-[150px]">
          <ButtonIconWrapper>
            <Lock className="w-full" />
          </ButtonIconWrapper>
          Segurança
        </Button>
      </form>
    </div>
  )
}

export default App
