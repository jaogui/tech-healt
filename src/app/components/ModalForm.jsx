import React from "react";
import { XCircle } from "lucide-react";
function ModalForm({ titleModal, descModal }) {
  return (
    <div className="absolute top-0 right-0 bg-gray-900 h-screen w-screen z-10 opacity-90 ">
      <div className="flex items-center justify-center h-full">
        <div className="bg-white w-[585px] h-auto rounded-sm p-4 opacity-100">
          <h2 className="text-xl py-1">{titleModal}</h2>
          <p className="text-sm text-zinc-500">{descModal}</p>
          <form className="w-full py-4">
            <label
              htmlFor="namePatient"
              className="flex flex-col gap-1 text-sm py-2"
            >
              Nome completo do paciente:
              <input
                type="text"
                name="Paciente"
                id="namePatient"
                required
                className="bg-slate-200 py-1 px-2 rounded-sm focus:bg-white"
              />
            </label>
            <label
              htmlFor="dateMeeting"
              className="flex flex-col gap-1 text-sm py-2"
            >
              Data da consulta:
              <input
                type="date"
                placeholder="DD-MM-YYYY"
                id="dateMeeting"
                min="2023-01-01"
                max="2024-06-10"
                className="bg-slate-200 py-1 px-2 rounded-sm focus:bg-white"
              />
            </label>
            <label
              htmlFor="descPatient"
              className="flex flex-col gap-1 text-sm py-2"
            >
              Descrição da consulta:
              <textarea
                name="descPatient"
                id="descPatient"
                cols="20"
                rows="5"
                className="resize-none bg-slate-200 py-1 px-2 rounded-sm focus:bg-white"
              />
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalForm;
