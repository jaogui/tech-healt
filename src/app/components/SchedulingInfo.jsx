import React from "react";
import {
  CalendarHeart,
  HeartPulse,
  PersonStanding,
  Pencil,
} from "lucide-react";

function SchedulingInfo({
  clientName,
  clientID,
  clienteDate,
  doctorName,
  doctorID,
  doctorSpecialization,
  serviceValue,
  serviceDate,
  serviceTime,
  serviceInfo,
}) {
  return (
    <article className="w-full p-6 flex flex-col gap-3 rounded-md bg-slate-50 shadow-sm border border-slate-50 max-w-[350px]">
      <div className="text-sm border-b border-zinc-200 pb-5 SchedulingInfo-client">
        <h4 className="text-lg font-semibold py-2 flex gap-2 items-center">
          Consulta
          <CalendarHeart size={20} />
        </h4>
        <div className="flex flex-col gap-0.5">
          <span className="flex gap-2">
            Tipo de consulta:
            <p className="font-semibold">{serviceInfo}</p>
          </span>
          <div className="flex gap-2">
            <div className="flex gap-2 items-center">
              <span>Data:</span>
              <p className="font-semibold">{serviceDate}</p>-
              <p className="font-semibold">{serviceTime}</p>
            </div>
            <button>
              <Pencil size={15} color="green" />
            </button>
          </div>
          <div className="flex gap-2">
            <div className="flex gap-2 items-center">
              <span>Cobrança:</span>
              <p className="font-semibold">{serviceValue}</p>
            </div>
            <button>
              <Pencil size={15} color="green" />
            </button>
          </div>
        </div>
      </div>

      <div className="text-sm border-b border-zinc-200 pb-5">
        <h4 className="text-lg font-semibold py-2 flex gap-2 items-center">
          Paciente
          <PersonStanding size={20} />
        </h4>
        <div className="flex gap-0.5 flex-col">
          <span className="flex gap-2">
            Nome:
            <p className="font-semibold">{clientName}</p>
          </span>
          <span className="flex gap-2">
            CPF:
            <p className="font-semibold">{clientID}</p>
          </span>
          <span className="flex gap-2">
            Data de nascimento:
            <p className="font-semibold">{clienteDate}</p>
          </span>
        </div>
      </div>

      <div className="text-sm">
        <h4 className="text-lg font-semibold py-2 flex gap-2 items-center">
          Profissional
          <HeartPulse size={20} />
        </h4>
        <div className="flex gap-0.5 flex-col">
          <span className="flex gap-2">
            Nome:
            <p className="font-semibold">{doctorName}</p>
          </span>
          <span className="flex gap-2">
            CRM:
            <p className="font-semibold">{doctorID}</p>
          </span>
          <span className="flex gap-2">
            Área:
            <p className="font-semibold">{doctorSpecialization}</p>
          </span>
        </div>
      </div>

      <div></div>
    </article>
  );
}

export default SchedulingInfo;
