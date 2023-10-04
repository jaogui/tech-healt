import { useContext, useState, useEffect } from "react";
import { XCircle } from "lucide-react";
import { InputForm } from '../form/InputForm'
import { contextApp } from "../hooks/ContextApp";
import { api } from "../../lib/axios";
import { formatCPF } from "../../utils/formatCPF";
import { formatDate } from "../../utils/formatDate";
import { formatTime } from "../../utils/formatTime";

export function ModalForm({ titleModal, descModal, openModal, closeModal }) {
  const { formNewAppointment, setFormNewAppointment } = useContext(contextApp);
  const [cpfFormat, setCpfFormat] = useState("");
  const [dateFormat, setDateFormat] = useState("");
  const [timeFormat, setTimeFormat] = useState("");
  const [doctorsForm, setDoctorsForm] = useState([]);

  useEffect(() => {
    async function getDoctors() {
      const response = await api.get("/doctors");
      const data = response.data;
      setDoctorsForm(data);
    }
    getDoctors();
  }, []);

  async function onSubmit(event) {
    event.preventDefault();
    const valueInputs = document.querySelectorAll("input, textarea");
    const formValues = {};
    valueInputs.forEach((input) => {
      formValues[input.name] = input.value;
    });
    setFormNewAppointment([...formNewAppointment, { ...formValues }]);

    //Cadastrando dados no BD
    await api.post("/appointment", {
      nameClient: formValues.patient,
      idUser: formValues.cpf,
      description: formValues.descAppointment,
      dateAppointment: formValues.dateAppointment,
      timeAppointment: formValues.timeAppointment,
    });
    closeModal();
  }

  function handleInputCpf(event) {
    const formattedCpf = formatCPF(event);
    setCpfFormat(formattedCpf);
  }

  function handleInputDate(event) {
    const formattedDate = formatDate(event);
    setDateFormat(formattedDate);
  }

  function handleInputTime(event) {
    const formattedTime = formatTime(event);
    setTimeFormat(formattedTime);
  }

  return (
    <div className="fixed top-0 right-0 bg-[rgba(37,45,59,0.7)] h-screen w-full z-50">
      <div className="flex items-center justify-center h-full">
        <div className="bg-white w-[585px] h-auto rounded-sm p-5 opacity-100 relative">
          <h2 className="text-xl py-1">{titleModal}</h2>
          <p className="text-sm text-zinc-500">{descModal}</p>
          <form className="w-full py-4">
            <InputForm labelInput="Nome completo do paciente:" idInput="namePatient" nameInput="patient" htmlForLabel="namePatient" />
            <InputForm labelInput="CPF:" idInput="cpfPatient" nameInput="cpf" htmlForLabel="cpfPatient" />
            <label htmlFor="descAppointment" className="flex flex-col gap-1 text-sm py-2">
              Descrição da consulta:
              <textarea
                name="descAppointment"
                id="descAppointment"
                cols="20"
                rows="5"
                className="resize-none bg-slate-200 py-1 px-2 rounded-sm focus:bg-white"
                required
              />
            </label>
            <div className="flex gap-4">
              <InputForm labelInput="Data do agendamento::" idInput="dateAppointment" nameInput="dateAppointment" htmlForLabel="dateAppointment" onChange={handleInputDate} placeHolder="dd/mm/aaaa" valueInput={dateFormat} />
              <InputForm labelInput="Horário do agendamento:" idInput="timeAppointment" nameInput="timeAppointment" htmlForLabel="timeAppointment" onChange={handleInputTime} placeHolder="hh:mm" valueInput={timeFormat} />
             
            </div>
            <label
              htmlFor="doctorSelect"
              className="flex flex-col gap-1 text-sm py-2"
            >
              Médico especialista:
              <select
                name="doctorSelect"
                id="doctorSelect"
                className="bg-slate-200 py-1 px-2 rounded-sm"
              >
                {doctorsForm.map((doctor) => (
                  <option key={doctor.id}>
                    Dr.(ª) {doctor.nameDoctor} / {doctor.specialization}
                  </option>
                ))}
              </select>
            </label>
            <div className="w-full pt-5 flex gap-2 justify-end">
              <button
                className="w-[100px] py-1 text-sm font-Montserrat rounded-sm bg-sky-200"
                onClick={onSubmit}
              >
                Salvar
              </button>
              <button
                className="w-[100px] py-1 text-sm font-Montserrat rounded-sm bg-red-300"
                onClick={closeModal}
              >
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
