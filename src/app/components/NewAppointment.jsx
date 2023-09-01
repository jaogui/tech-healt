import { useState } from "react";
import ModalForm from "./ModalForm";
import {
  User2,
  ClipboardEdit,
  Trash2,
  Calendar,
  PlusCircle,
  CheckSquare,
  Clock,
} from "lucide-react";

function NewAppointment({ appointmentTime, appointmentDate, clientName, clientID, clientDate, appointmentDescription, appointmentType, editAppointment, setNew}) {
  const [modalFormView, setModalFormView] = useState(false);

  function modalOpen() {
    setModalFormView(true);
  }
  
  function modalClose() {
    setModalFormView(false);
  }

  return (
    <>
      {modalFormView && (
        <ModalForm
          titleModal="Adicionar um novo agendamento"
          descModal="Preencha o formulário para marcar um novo horário"
          openModal={modalFormView}
          closeModal={modalClose}
        />
      )}
      <article className="px-4 pt-3 pb-1.5 shadow-sm border border-neutral-200 bg-neutral-200 rounded-md">
        <p className="text-sm p-0.5 text-slate-800 w-full border-b border-zinc-400">
          <button className="flex items-center gap-2">
            {appointmentTime}
              <Clock size={16} color="green" />
            {appointmentDate}
          </button>
        </p>
        <div className="flex gap-4 pt-2.5">
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
          <div className="flex flex-col text-sm">
            {setNew ? (
              <span className="flex flex-col">
                <p className="font-semibold">
                  {clientName} &#8226; {clientID}
                </p>
                <p className="font-semibold">{clientDate}</p>
              </span>
            ) : (
              <p className="">Horário disponível</p>
            )}
            <p>{appointmentDescription}</p>
            <p>{appointmentType}</p>
          </div>
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
              <PlusCircle size={20} onClick={modalOpen} />
            </button>
          </span>
        )}
      </article>
    </>
  );
}

export default NewAppointment;
