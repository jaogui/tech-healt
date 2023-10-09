import { useEffect, useState } from "react";
import { InputSeach } from "../form/InputSeach";
import { AppointmentInfo } from "../ui/AppointmentInfo";
import { api } from "@/app/lib/axios";

export function AppointmentRegister() {
  const [Appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function getInfoAppointments() {
      const response = await api.get("/appointment");
      const appointmentsInfo = response.data;
      setAppointments(appointmentsInfo);
      console.log(appointmentsInfo);
    }
    getInfoAppointments();
  }, []);

  return (
    <section className="slideFromRight">
      <div className="py-1">
        <InputSeach />
      </div>
      <h3 className="text-2xl my-4 flex justify-between items-center font-Montserrat border-b border-slate-300 ">
        Consultas Agendadas
      </h3>
      <div className="flex gap-5 flex-wrap">
        {Appointments.map((appointment) => (
          <AppointmentInfo
          key={appointment.id}
            serviceInfo="Avaliação"
            clientName={appointment.nameClient}
            clientID={appointment.idUser}
            doctorName={appointment.doctorName}
            doctorSpecialization={appointment.doctorSpeclialization2}
            clientDate={appointment.dateAppointment}
          />
        ))}
      </div>
    </section>
  );
}
