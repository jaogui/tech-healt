import React from "react";
import { User2Icon, Bell } from "lucide-react";

function Header() {
  return (
    <header className="bg-slate-200 w-full text-sm border-b border-slate-200">
      <nav>
        <ul className="flex gap-2 h-[85px] items-center justify-end">
          <li className="min-w-[80px] text-center h-full flex justify-center items-center flex-col  gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center gap-1 border border-zinc-500 ">
              <Bell size={20} />
            </div>
            <p className="font-semibold text-xs bg-[#de6767] rounded-sm px-4 ">33</p>
          </li>
          <li className="min-w-[80px] text-center h-full flex justify-center items-center flex-col gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center gap-1 border border-zinc-500 ">
              <User2Icon size={20} />
            </div>
            <p className="font-semibold text-xs px-2 bg-slate-400 rounded-sm">Perfil</p>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
