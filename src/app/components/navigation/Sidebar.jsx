import {React, useContext} from "react";
import { contextApp  } from "../hooks/ContextApp";
import {Stethoscope} from 'lucide-react'


export function Sidebar() {
  const {setContentView, contentView } = useContext(contextApp);

  return (
    <nav className="min-w-[300px] min-h-screen bg-slate-50 border border-slate-200 shadow-sm font-Montserrat">
      <div className="h-[85px] flex flex-col px-6 gap-2 justify-center border-b border-slate-200"> 
        <div className="h-8 w-8 flex items-center justify-center rounded-sm bg-slate-400 shadow-xl"> 
         <Stethoscope size={25} color="#f3f3f3" />
        </div>
       <p className="text-sm w-28 font-semibold">Tech Healt</p>
        </div>
      <ul className="text-xs font-semibold pt-5">
        <li className={`w-full px-3 mt-1`}>
         <button className={`py-3 px-3 rounded-xl w-full text-left uppercase hover:bg-slate-300 ${contentView === 'workflow' ? 'activeMenu'  : ''}`} onClick={() => setContentView('workflow')}>Fluxo de Trabalho</button>
        </li>
        <li className="w-full px-3 mt-1">
         <button className={`py-3 px-3 rounded-xl w-full text-left uppercase hover:bg-slate-300 ${contentView === 'routine' ? 'activeMenu'  : ''}`} onClick={() => setContentView('routine')}>Agendamentos</button>
        </li>
        <li className="w-full px-3 mt-1">
         <button className={`py-3 px-3 rounded-xl w-full text-left uppercase hover:bg-slate-300 ${contentView === 'appointments' ? 'activeMenu'  : ''}`} onClick={() => setContentView('appointments')}>Consultas</button>
        </li>
      </ul>
    </nav>
  );
}
