import { useState, useEffect, useContext } from "react";
import { ProfileInfo } from "../ui/ProfileInfo";
import { NewAppointment } from "../ui/NewAppointment";
import { contextApp } from "../hooks/ContextApp";
import { api } from "../../lib/axios";

export function RoutineManagement() {
  const { doctorsInfo, appointmentsInfo } = useContext(contextApp);

  return (
    <section className="flex w-full justify-between gap-6">
      <div className="w-full max-w-[550px]">
        <h4 className="pb-4 text-lg font-Montserrat">Médicos</h4>
        <div className="flex flex-col gap-4">
          {doctorsInfo.map((doctor, index) => (
            <div key={index}>
              <ProfileInfo
                nameProfile={doctor.nameDoctor}
                company={doctor.company}
                specialization={doctor.specialization}
                status={doctor.status}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full">
        <h3 className="pb-4 text-lg font-Montserrat">Agendamentos</h3>
        <NewAppointment
          clientName="Nome do paciente"
          appointmentTime="--:--"
          appointmentDate="--/--/----"
        />
        <div className="flex flex-col gap-4">
          {appointmentsInfo.length !== 0 ? (
            appointmentsInfo.map((appointmentInfo, index) => (
                <NewAppointment
                  key={index}
                  appointmentTime={appointmentInfo.timeAppointment}
                  appointmentDate={appointmentInfo.dateAppointment}
                  clientName={appointmentInfo.nameClient}
                  clientID={appointmentInfo.cpfClient}
                  appointmentDescription={appointmentInfo.description}
                  setNew={true}
                />
            ))
          ) : (
            <p className="font-Montserrat text-sm gap-2 text-sky-800 h-full flex">
              Nenhum agendamento realizado.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
