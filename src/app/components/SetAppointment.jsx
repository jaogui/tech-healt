import {
  User2,
  ClipboardEdit,
  Trash2,
  Calendar,
  PlusCircle,
  CheckSquare,
  Clock,
} from "lucide-react";
import React from "react";

function SetAppointment({
  appointmentTime,
  patientName,
  appointmentDescription,
  editAppointment,
  setNew,
}) {
  return (
    <article className="px-4 pt-3 pb-1.5 shadow-sm border border-neutral-200 bg-neutral-200 rounded-md">
      <p className="text-sm p-0.5 text-slate-800 w-full border-b border-zinc-400">
        <button className="flex items-center gap-2">
          {appointmentTime}
          <Clock size={16} color="green" />
        </button>
      </p>
      <div className="flex items-center gap-5 pt-2">
        <div className="w-10 h-10 rounded-full bg-slate-300 flex items-center justify-center">
          {setNew ? (
            <img
              className="rounded-full"
              src="https://github.com/jaogui.png"
            ></img>
          ) : (
            <User2 size={20} />
          )}
        </div>
        <span className="flex flex-col text-sm">
          {setNew ? (
            <p className="font-semibold">{patientName}</p>
          ) : (
            <p className="">Horário disponível</p>
          )}
          <p>{appointmentDescription}</p>
        </span>
      </div>
      {setNew ? (
        <span className="flex items-center gap-4 pt-1 justify-end">
          <button>
            <CheckSquare size={20} />
          </button>
          <button>
            <Calendar size={20} />
          </button>
          <button>
            <ClipboardEdit size={20} />
          </button>
          <button>
            <Trash2 size={20} />
          </button>
        </span>
      ) : (
        <span className="flex items-center gap-4 pt-1 justify-end">
          <button>
            <PlusCircle size={20} />
          </button>
        </span>
      )}
    </article>
  );
}

export default SetAppointment;
