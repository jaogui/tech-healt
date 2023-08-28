import { useState, useEffect, useRef } from "react";
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
  serviceInfo,
}) {
  const [isEditable, setIsEditable] = useState({});
  const [valuesInfo, setValuesInfo] = useState({
    infoDate: "10/10/2023",
    infoTime: "15:00",
    infoPrice: "50,00",
  });

  useEffect(() => {
    const savedValues = JSON.parse(localStorage.getItem('infoAppointment'));
    if (savedValues) {
      setValuesInfo(savedValues);
    }
  }, []);

  function handleInfoChange(field, value){
    setValuesInfo((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };

  useEffect(()=>{
    localStorage.setItem('infoAppointment', JSON.stringify(valuesInfo));
  },[valuesInfo])

  const refs = {
    infoDate: useRef(null),
    infoTime: useRef(null),
    infoPrice: useRef(null),
  };

  function alterInput(field) {
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
                className="font-semibold max-w-[100px] bg-slate-200 ml-0.5 pl-1 focus:outline-none focus:bg-slate-300"
                type="text"
                defaultValue={valuesInfo.infoDate}
                readOnly={!isEditable.infoDate}
                ref={refs.infoDate}
                onChange={(e) => handleInfoChange('infoDate', e.target.value)}
              />
            </span>
            <button onClick={() => alterInput("infoDate")}>
              <Pencil size={15} color="green" />
            </button>
          </div>
          <div className="flex gap-2 items-center justify-between">
            <span>
              Horário:
              <input
                className="font-semibold max-w-[80px] bg-slate-200 ml-0.5 pl-1 focus:outline-none focus:bg-slate-300"
                type="text"
                readOnly={!isEditable.infoTime}
                defaultValue={valuesInfo.infoTime}
                ref={refs.infoTime}
                onChange={(e) => handleInfoChange('infoTime', e.target.value)}
              />
            </span>
            <button onClick={() => alterInput("infoTime")}>
              <Pencil size={15} color="green" />
            </button>
          </div>
          <div className="flex gap-2 justify-between">
            <div className="flex gap-2 items-center">
              <span>
                Cobrança:
                <input
                  className="font-semibold max-w-[80px] bg-slate-200 ml-0.5 pl-1 focus:outline-none focus:bg-slate-300"
                  type="text"
                  readOnly={!isEditable.infoPrice}
                  defaultValue={valuesInfo.infoPrice}
                  ref={refs.infoPrice}
                  onChange={(e) => handleInfoChange('infoPrice', e.target.value)}
                />
              </span>
            </div>
            <button onClick={() => alterInput("infoPrice")}>
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
