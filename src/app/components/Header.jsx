import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="bg-slate-200 w-full text-sm border border-b-slate-300">
      <nav>
        <ul className="flex gap-2 h-[55px] items-center">
           <li className="min-w-[80px] text-center h-full flex items-center hover:bg-slate-300">
            <Link className="w-full" href="/">Home</Link>
          </li>
           <li className="min-w-[80px] text-center h-full flex items-center hover:bg-slate-300">
            <Link className="w-full" href="/">Sobre</Link>
          </li>
           <li className="min-w-[80px] text-center h-full flex items-center hover:bg-slate-300">
            <Link className="w-full" href="/">Faq</Link>
          </li>
           <li className="min-w-[80px] text-center h-full flex items-center hover:bg-slate-300">
            <Link className="w-full" href="/">Suporte</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
