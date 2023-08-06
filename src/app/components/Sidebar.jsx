import {React, useContext} from "react";
import { contextApp  } from "../ContextApp";
import {Stethoscope} from 'lucide-react'

function Sidebar() {
  const {setContentView } = useContext(contextApp);

  return (
    <nav className="min-w-[300px] bg-slate-50 border border-slate-200 shadow-md">
      <div className="h-[85px] flex flex-col px-6 gap-2 justify-center border-b border-slate-200"> 
        <div className="h-8 w-8 flex items-center justify-center rounded-sm bg-slate-400 shadow-xl"> 
         <Stethoscope size={25} color="#f3f3f3" />
        </div>
       <p className="text-sm w-28 font-semibold">Tech Healt</p>
        </div>
      <ul className="text-xs font-semibold pt-5">
        <li className="w-full px-3">
         <button className="py-3 px-3 rounded-xl w-full text-left uppercase hover:bg-slate-300" onClick={() => setContentView('workflow')}>Fluxo de Trabalho</button>
        </li>
        <li className="w-full px-3">
         <button className="py-3 px-3 rounded-xl w-full text-left uppercase hover:bg-slate-300" onClick={() => setContentView('routine')}>Rotina de pacientes</button>
        </li>
        <li className="w-full px-3">
         <button className="py-3 px-3 rounded-xl w-full text-left uppercase hover:bg-slate-300" onClick={() => setContentView('patients')}>Agendamentos</button>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
