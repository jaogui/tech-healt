import { React, useContext, useEffect, useState } from "react";
import { DashboardBlock } from "../components/ui/DashboardBlock";
import { Notification } from "../components/feedbacks/Notification";
import { Datepicker } from "../components/ui/Datepicker";
import { InputSeach } from "../components/form/InputSeach";
import { ProfileInfo } from "../components/ui/ProfileInfo";
import { NewAppointment } from "../components/ui/NewAppointment";
import { AppointmentInfo } from "../components/ui/AppointmentInfo";
import { Smile } from "lucide-react";
import { api } from "../lib/axios";
import { contextApp } from "../components/hooks/ContextApp";

export function ContentTabs() {
  const {
    contentView,
    qtdNotice,
    addNotice,
    formNewAppointment,
    setFormNewAppointment,
  } = useContext(contextApp);
  const [initialNoticesAdded, setInitialNoticesAdded] = useState(false);
  const [doctorsInfo, setDoctorsInfo] = useState([]);

  useEffect(() => {
    if (!initialNoticesAdded) {
      //Pega as notificações do banco de dados
      async function getNotifications() {
        const response = await api.get("/notifications");
        const data = response.data;

        // Adiciona notificaçoes ao contexto
        if (qtdNotice.length === 0) {
          data.forEach((notice) => {
            addNotice(notice);
          });
          setInitialNoticesAdded(true); //
        }
      }
      getNotifications();
    }
  }, [addNotice]);

  //Pega os items de agendamento do banco de dados.
  useEffect(() => {
    async function getAppointments() {
      const response = await api.get("/appointment");
      const data = response.data;
      setFormNewAppointment(data);
    }
    getAppointments();
  }, []);

  useEffect(() => {
    async function getDoctors() {
      const doctors = await api.get("/doctors");
      const data = doctors.data;
      setDoctorsInfo(data);
    }
    getDoctors();
  }, []);

  return (
    <main className="px-9 py-6">
      {contentView === "workflow" ? (
        <section className="slideFromRight">
          <div className="py-1">
            <InputSeach />
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-2xl my-4 font-Montserrat border-b border-slate-300">
                Dashboard Info
              </h3>
              <div className="flex gap-4 py-2">
                <DashboardBlock
                  backgroundView="linear-gradient(288deg, #ffffff 29%, #6967de8d 93%)"
                  title="Agendamentos do dia"
                  infoContentMain="50"
                  infoContentSecondary="Agendados"
                  description="Verifique seus agendamentos do dia."
                  iconName="icon4"
                />
                <DashboardBlock
                  backgroundView="linear-gradient(288deg, #ffffff 29%, #67c8de7d 93%)"
                  title="Atendimentos do dia"
                  infoContentMain="175"
                  infoContentSecondary="Atendidos"
                  description="Atendimentos realizados no dia."
                  iconName="icon2"
                />
                <DashboardBlock
                  backgroundView="linear-gradient(288deg, #ffffff 29%, #de67678d 93%)"
                  title="Avisos/Lembretes"
                  infoContentMain="26"
                  infoContentSecondary="Lembretes"
                  description="Lembretes adicionados."
                  iconName="icon3"
                />
                <DashboardBlock
                  backgroundView="linear-gradient(288deg, #ffffff 29%, #8dde679d 93%)"
                  title="Faturamento"
                  labelInfo="R$"
                  infoContentMain="800,00"
                  infoContentSecondary="Faturamento"
                  description="Faturamento dos clientes de hoje."
                  iconName="icon1"
                />
              </div>
            </div>
            <div className="grid grid-flow-col grid-cols-1 w-full gap-5">
              <div className="flex flex-col w-full">
                <h3 className="text-xl py-3 font-Montserrat">
                  Avisos e Lembretes
                </h3>
                <div className="flex gap-2 h-full">
                  <div className="flex flex-col gap-4 w-full">
                    {qtdNotice.length !== 0 && initialNoticesAdded ? (
                      <div className="flex flex-col gap-4 w-full">
                        {qtdNotice.map((notice) => (
                          <Notification
                            key={notice.id}
                            titleNotice={notice.type}
                            idCheckbox={notice.id}
                            descriptionNotice={notice.description}
                          />
                        ))}
                      </div>
                    ) : (
                      <p className="font-Montserrat font-sm gap-2 text-sky-800 h-full flex justify-center items-center">
                        Todas notificações foram visualizadas
                        <Smile size={20} />
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full pt-10 ">
                <Datepicker />
              </div>
            </div>
          </div>
        </section>
      ) : null}
      {contentView === "routine" ? (
        <section className="flex w-full justify-between gap-6">
          <div className="w-full max-w-[550px]">
            <h4 className="pb-4 text-lg font-Montserrat">Médicos</h4>
            <div className="flex flex-col gap-4">
              {doctorsInfo.map((doctor) => (
                <div key={doctor.id}>
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
              {formNewAppointment.length !== 0 ? (
                formNewAppointment.map((appointmentInfo, index) => {
                  return (
                    <NewAppointment
                      key={index}
                      appointmentTime={appointmentInfo.timeAppointment}
                      appointmentDate={appointmentInfo.dateAppointment}
                      clientName={appointmentInfo.nameClient}
                      clientID={appointmentInfo.idUser}
                      appointmentDescription={appointmentInfo.description}
                      setNew={true}
                    />
                  );
                })
              ) : (
                <p className="font-Montserrat text-sm gap-2 text-sky-800 h-full flex">
                  Nenhum agendamento realizado.
                </p>
              )}
            </div>
          </div>
        </section>
      ) : null}
      {contentView === "patients" ? (
        <section className="slideFromRight">
          <div className="py-1">
            <InputSeach />
          </div>
          <h3 className="text-2xl my-4 flex justify-between items-center font-Montserrat border-b border-slate-300 ">
            Consultas Agendadas
          </h3>
          <div className="flex gap-5 flex-wrap">
            <AppointmentInfo
              serviceInfo="Avaliação"
              clientName="Vitor Luiz Almeida"
              clientID="099.999.999-01"
              doctorName="Dra. Renata"
              doctorSpecialization="Fisioterapeuta"
              clientDate="26/07/1999"
              data
            />
            <AppointmentInfo
              serviceInfo="Avaliação"
              clientName="José"
              clientID="099.555.741-01"
              doctorName="Dr. Luiz"
              doctorSpecialization="Clínico"
              clientDate="11/06/1895"
            />
            <AppointmentInfo
              serviceInfo="Avaliação"
              clientName="Junior"
              clientID="099.444.245-01"
              doctorName="Dr. Paulo"
              doctorSpecialization="Fisioterapeuta"
              clientDate="10/04/1980"
            />
            <AppointmentInfo
              serviceInfo="Exame"
              clientName="Gabriel"
              clientID="099.999.741-01"
              doctorName="Dr. Renato"
              doctorSpecialization="Ortopedista"
              clientDate="05/12/1972"
            />
          </div>
        </section>
      ) : null}
    </main>
  );
}
