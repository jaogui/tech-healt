import {React, useContext} from "react";
import { contextApp  } from "../ContextApp";

function Sidebar() {
  const {setContentView } = useContext(contextApp);

  return (
    <nav className="min-w-[300px] h-screen bg-slate-50 border border-slate-200">
      <div className="px-4">Info Business</div>
      <ul className="text-sm pt-8">
        <li className="bg-slate-200 border border-b-slate-300 w-full hover:bg-slate-300">
         <button className=" py-3 px-4 w-full text-left" onClick={() => setContentView('workflow')}>Fluxo de Trabalho</button>
        </li>
        <li className="bg-slate-200 border border-b-slate-300 w-full hover:bg-slate-300">
         <button className="py-3 px-4 w-full text-left" onClick={() => setContentView('routine')}>Rotina de pacientes</button>
        </li>
        <li className="bg-slate-200 border border-b-slate-300 w-full hover:bg-slate-300">
         <button className=" py-3 px-4 w-full text-left" onClick={() => setContentView('diary')}>Agendamentos</button>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
