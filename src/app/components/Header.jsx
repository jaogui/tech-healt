import React from "react";
import {
  User2Icon,
  Bell,
  Megaphone,
  CalendarCheck,
  FileEdit,
} from "lucide-react";

export function Header() {
  const [notification, setNotification] = React.useState(false);

  function toggleNotification() {
    setNotification(!notification);
  }

  return (
    <header className="bg-slate-200 w-full text-sm border-b border-slate-200">
      <nav>
        <ul className="flex gap-2 h-[85px] items-center justify-end">
          <li className="min-w-[80px] text-center h-full flex justify-center items-center flex-col  gap-2 cursor-pointer">
            <button
              className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center gap-1 border border-zinc-500"
              onClick={toggleNotification}
            >
              <Bell size={20} />
            </button>
            <p className="font-semibold text-xs bg-[#de6767] rounded-sm px-4 ">
              33
            </p>
          </li>
          <li className="min-w-[80px] text-center h-full flex justify-center items-center flex-col gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center gap-1 border border-zinc-500 ">
              <User2Icon size={20} />
            </div>
            <p className="font-semibold text-xs px-2 bg-slate-400 rounded-sm">
              Perfil
            </p>
          </li>
        </ul>
      </nav>

      {notification && (
        <ul className="absolute right-24 z-10 h-auto w-80 rounded-sm bg-indigo-100 shadow-sm">
          <li className="p-4 hover:bg-indigo-200 cursor-pointer flex items-center gap-4">
            <Megaphone size={22} />
            <span className="flex flex-col">
              <p className="text-base font-bold">Lembrete de consulta</p>
              <p className="text-sm">Consulta ás 15:00 com Luciana</p>
            </span>
          </li>
          <li className="p-4 hover:bg-indigo-200 cursor-pointer flex items-center gap-4">
            <CalendarCheck size={22} />
            <span className="flex flex-col">
              <p className="text-base font-bold">Lembrete de confirmação</p>
              <p className="text-sm">Luciano confirmar consulta</p>
            </span>
          </li>
          <li className="p-4 hover:bg-indigo-200 cursor-pointer flex items-center gap-4">
            <FileEdit size={22} />
            <span className="flex flex-col">
              <p className="text-base font-bold">Lembrete de alteração</p>
              <p className="text-sm">Luiz solicitou alteração de data</p>
            </span>
          </li>
        </ul>
      )}
    </header>
  );
}
