import { Avatar } from "@nextui-org/avatar";
import { User2 } from "lucide-react";


export function AvatarElement() {
  return (
    <>
      <Avatar className="p-2 h-[40px] bg-slate-300 flex items-center justify-center" icon={<User2 />}/>
    </>
  );
}
