import React from "react";
import { XCircle } from "lucide-react";

function ModalForm({ titleModal, descModal, openModal, closeModal }) {

  return (
    <div className="fixed top-0 right-0 bg-[rgba(37,45,59,0.7)] h-screen w-full z-50">
      <div className="flex items-center justify-center h-full">
        <div className="bg-white w-[585px] h-auto rounded-sm p-5 opacity-100 relative">
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
              htmlFor="cpfPatient"
              className="flex flex-col gap-1 text-sm py-2"
            >
              CPF:
              <input
                type="number"
                name="cpf"
                id="cpfPatient"
                required
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
                required
              />
            </label>

            <div className="flex gap-4">
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
                  data-format="dd-mm-yyyy"
                  required
                  className="bg-slate-200 py-1 px-2 rounded-sm focus:bg-white"
                />
              </label>
              <label
                htmlFor="hourMeeting"
                className="flex flex-col gap-1 text-sm py-2"
              >
                Horário da consulta:
                <input
                  type="time"
                  min="09:00"
                  max="17:00"
                  placeholder="DD-MM-YYYY"
                  id="hourMeeting"
                  className="bg-slate-200 py-1 px-2 rounded-sm focus:bg-white"
                  required
                />
              </label>
            </div>
            <div className="w-full pt-5 flex gap-2 justify-end">
              <button className="w-[100px] py-1 text-sm font-Montserrat rounded-sm bg-sky-200">
                Salvar
              </button>
              <button className="w-[100px] py-1 text-sm font-Montserrat rounded-sm bg-red-300" onClick={closeModal}>
                Cancelar
              </button>
            </div>
            <button className="absolute top-2 right-2" onClick={closeModal}>
              <XCircle size={25} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalForm;
