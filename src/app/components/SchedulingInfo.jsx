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
  const [infoDate, setInfoDate] = React.useState("17/10/2023");
  const [infoTime, setInfoTime] = React.useState("12:00");
  const [infoPrice, setInfoPrice] = React.useState("50,00");
  const [isEditable, setIsEditable] = React.useState({});

  const refs = {
    infoDate: React.useRef(null),
    infoTime: React.useRef(null),
    infoPrice: React.useRef(null),
  };

  function alterInfo(field) {
    setIsEditable((prevState) => ({
      ...prevState,
      [field]: true,
    }));
    refs[field].current.focus();
  }

  return (
    <article className="w-full p-4 flex flex-col rounded-md bg-slate-200 shadow-sm border border-slate-200 max-w-[350px]">
      <div className="text-sm border-b border-zinc-300 pb-5 SchedulingInfo-client">
        <h4 className="text-lg font-semibold py-2 flex gap-2 items-center">
          Consulta
          <CalendarHeart size={20} />
        </h4>
        <div className="flex flex-col gap-0.5">
          <span className="flex gap-2">
            Tipo de consulta:
            <p className="font-semibold">{serviceInfo}</p>
          </span>
          <div className="flex gap-2 items-center justify-between">
            <span>
              Data:
              <input
                className="font-semibold max-w-[80px] bg-slate-200 pl-1"
                type="text"
                defaultValue={infoDate}
                readOnly={!isEditable.infoDate}
                ref={refs.infoDate}
              />
            </span>
            <button onClick={() => alterInfo("infoDate")}>
              <Pencil size={15} color="green" />
            </button>
          </div>
          <div className="flex gap-2 items-center justify-between">
            <span>
              Horário:
              <input
                className="font-semibold max-w-[50px] bg-slate-200 pl-1"
                type="text"
                readOnly={!isEditable.infoTime}
                defaultValue={infoTime}
                ref={refs.infoTime}
              />
            </span>

            <button onClick={() => alterInfo("infoTime")}>
              <Pencil size={15} color="green" />
            </button>
          </div>
          <div className="flex gap-2 justify-between">
            <div className="flex gap-2 items-center">
              <span>
                Cobrança:
                <input
                  className="font-semibold max-w-[50px] bg-slate-200 pl-1"
                  type="text"
                  readOnly={!isEditable.infoPrice}
                  defaultValue={`${infoPrice}`}
                  ref={refs.infoPrice}
                />
              </span>
            </div>
            <button onClick={() => alterInfo("infoPrice")}>
              <Pencil size={15} color="green" />
            </button>
          </div>
        </div>
      </div>
      <div className="text-sm border-b border-zinc-300 pb-5">
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
    </article>
  );
}

export default SchedulingInfo;
