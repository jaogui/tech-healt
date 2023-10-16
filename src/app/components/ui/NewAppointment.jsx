import { useState } from "react";
import {ModalForm} from "../form/ModalForm";
import { AvatarElement } from "./AvatarElement"
import {
  ClipboardEdit,
  Trash2,
  Calendar,
  PlusCircle,
  CheckSquare,
  Clock,
} from "lucide-react";

export function NewAppointment({
  appointmentTime,
  appointmentDate,
  clientName,
  clientID,
  clientDate,
  appointmentDescription,
  setNew,
}) {
  const [modalFormView, setModalFormView] = useState(false);

  function toggleModal() {
    setModalFormView(!modalFormView);
  }

  return (
    <>
      {modalFormView && (
        <ModalForm
          titleModal="Adicionar um novo agendamento"
          descModal="Preencha o formulário para marcar um novo horário"
          openModal={modalFormView}
          closeModal={toggleModal}
        />
      )}
      {setNew ? (
        <article className="px-4 pt-3 pb-1.5 shadow-sm border border-neutral-200 bg-neutral-200 rounded-md">
          <p className="text-sm p-0.5 text-slate-800 w-full border-b border-zinc-400">
            <button className="flex items-center gap-2">
              {appointmentTime}
              <Clock size={16} color="green" />
              {appointmentDate}
            </button>
          </p>
          <div className="flex gap-4 pt-2.5">
            <AvatarElement />
            <div className="flex flex-col text-sm">
              <span className="flex flex-col">
                <p className="font-semibold">
                  {clientName} &#8226; {clientID}
                </p>
                <p className="font-semibold">{clientDate}</p>
                <p>{appointmentDescription}</p>
              </span>
            </div>
          </div>
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
        </article>
      ) : (
        <button
          onClick={toggleModal}
          className="flex gap-2 py-2 my-1 mb-4 justify-center items-center text-center text-zinc-600 w-full bg-slate-300 rounded-md uppercase text-md shadow-sm hover:bg-neutral-300 hover:text-zinc-900 hover:font-bold"
        >
          Cadastre novo agendamento
          <PlusCircle size={20} />
        </button>
      )}
    </>
  );
}
