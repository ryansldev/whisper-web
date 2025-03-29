import SendMessage from "@components/send-message";
import { Avatar } from "@components/ui/avatar";

export function ProfilePage() {
  const MOCKED_DATA = {
    id: "1",
    name: "Usuário aleatório",
    username: "usuario_aleatorio",
    profile_pic: "https://thispersondoesnotexist.com/"
  }
  
  return (
    <div className="flex flex-col gap-3 justify-center min-h-screen max-w-[90vw] mx-auto">
      <div className="flex items-center gap-3">
        <Avatar src={MOCKED_DATA.profile_pic} alt={MOCKED_DATA.name} />
        <div className="flex flex-col">
          <span>{MOCKED_DATA.name}</span>
          <span className="text-[14px] dark:text-neutral-500">@{MOCKED_DATA.username}</span>
        </div>
      </div>

      <div className="w-full h-[1px] dark:bg-neutral-800" />

      <SendMessage to={MOCKED_DATA.username} />
    </div>
  )
}