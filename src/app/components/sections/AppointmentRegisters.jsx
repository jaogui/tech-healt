import { useContext, useEffect } from "react";
import { InputSeach } from "../form/InputSeach";
import { AppointmentInfo } from "../ui/AppointmentInfo";
import { contextApp } from "../hooks/ContextApp";

export function AppointmentRegister() {
  const { appointmentsInfo } = useContext(contextApp);

  return (
    <section className="slideFromRight">
      <div className="py-1">
        <InputSeach />
      </div>
      <h3 className="text-2xl my-4 flex justify-between items-center font-Montserrat border-b border-slate-300 ">
        Consultas Agendadas
      </h3>
      <>
        {appointmentsInfo ? (
          <div className="flex gap-5 flex-wrap">
            {appointmentsInfo.map((appointment) => (
              <AppointmentInfo
                key={appointment.id}
                appointmentType={appointment.typeAppointment}
                clientName={appointment.nameClient}
                clientID={appointment.cpfClient}
                doctorName={appointment.doctorName}
                doctorSpecialization={appointment.doctorSpeclialization}
                clientDate={appointment.dateClient}
                appointmentDate={appointment.dateAppointment}
                appointmentTime={appointment.timeAppointment}
                appointmentValue={appointment.valueAppointment}
              />
            ))}
          </div>
        ) : (
          <p>info</p>
        )}
      </>
    </section>
  );
}
