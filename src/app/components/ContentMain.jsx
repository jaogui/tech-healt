import { React, useContext } from "react";
import { contextApp } from "../ContextApp";
import DashboardBlock from "../components/DashboardBlock";
import Notice from "../components/Notice";
import Datepicker from "../components/Datepicker";
import InputSeach from "../components/InputSeach";
import ProfileInfo from "../components/ProfileInfo";
import SetAppointment from "../components/SetAppointment";

function ContentMain() {
  const { contentView } = useContext(contextApp);
  return (
    <main className="px-9 py-8 bg-slate-100 h-screen">
      {contentView === "workflow" ? (
        <section className="flex flex-col gap-10">
          <div className="py-1">
            <InputSeach />
          </div>
          <div className="">
            <h3 className="text-2xl">Dashboard Info</h3>
            <div className="flex gap-4 py-2 flex-wrap">
              <DashboardBlock
                backgroundView="linear-gradient(288deg, #ffffff 29%, #6967de8d 93%)"
                title="Agendamentos do dia"
                infoContentMain="50"
                infoContentSecondary="Agendados"
                description="Verifique seus agendamentos do dia."
              />
              <DashboardBlock
                backgroundView="linear-gradient(288deg, #ffffff 29%, #67c8de7d 93%)"
                title="Atendimentos do dia"
                infoContentMain="175"
                infoContentSecondary="Atendidos"
                description="Atendimentos realizados no dia."
              />
              <DashboardBlock
                backgroundView="linear-gradient(288deg, #ffffff 29%, #de67678d 93%)"
                title="Avisos/Lembretes"
                infoContentMain="26"
                infoContentSecondary="Lembretes"
                description="Lembretes adicionados."
              />
              <DashboardBlock
                backgroundView="linear-gradient(288deg, #ffffff 29%, #8dde679d 93%)"
                title="Faturamento"
                infoContentMain="R$: 15.800"
                infoContentSecondary="Faturamento"
                description="Faturamento dos cliente de hoje."
              />
            </div>
          </div>

          <div className="grid grid-flow-col grid-cols-1 w-full gap-12">
            <div className="flex gap-6 w-full">
              <div className="w-full">
                <h3 className="text-2xl py-3">Avisos</h3>
                <div className="flex flex-col gap-4 w-full ">
                  <Notice
                    titleNotice="Aviso de solicitação"
                    idCheckbox="warningEdit"
                    descriptionNotice="Luciano solicitou consulta para terça-feira, horário 12:20"
                  />
                  <Notice
                    priority={`#67c8deb5`}
                    titleNotice="Aviso de confirmação"
                    idCheckbox="warningConfirm"
                    descriptionNotice="Luciana confirmou horário."
                  />
                  <Notice
                    priority={`#de6767b5`}
                    titleNotice="Aviso de cancelamento"
                    idCheckbox="warningCancel"
                    descriptionNotice="Vivian cancelou consulta."
                  />
                  <Notice
                    priority={`#67c8deb5`}
                    titleNotice="Aviso de alteração"
                    idCheckbox="warningAlter"
                    descriptionNotice="Luiz solicitou alteração da consulta para quarta-feira ás 16:30"
                  />
                </div>
              </div>
              <div className="w-full">
                <h3 className="text-2xl py-3">Lembretes</h3>
                <div className="flex flex-col w-full gap-4">
                  <Notice
                    titleNotice="Lembrete de consulta"
                    idCheckbox="reminderQuery"
                    descriptionNotice="Consulta hoje ás 15:00 com Luciana."
                  />
                  <Notice
                    priority={`#de6767b5`}
                    titleNotice="Lembrete de remarcação"
                    idCheckbox="reminderInfo"
                    descriptionNotice="Remarcar consulta com Vivian."
                  />
                  <Notice
                    priority={`#67c8deb5`}
                    titleNotice="Lembrete de confirmação"
                    idCheckbox="reminderConfirm"
                    descriptionNotice="Confirmar consulta do Luciano."
                  />
                  <Notice
                    titleNotice="Lembrete de consulta"
                    idCheckbox="reminderQuery2"
                    descriptionNotice="Consulta hoje ás 15:00 com Luciana."
                  />
                  <Notice
                    titleNotice="Lembrete de confirmação"
                    idCheckbox="reminderConfirm2"
                    descriptionNotice="Confirmar consulta do Bruno."
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full pt-10 ">
              <Datepicker />
            </div>
          </div>
        </section>
      ) : null}

      {contentView === "routine" ? (
        <section>
          <h3 className="text-2xl">Consultas</h3>
          <div className="flex w-full justify-between gap-10">
            <div className="w-full">
              <h4>Médicos</h4>
              <div className="flex flex-col gap-4">
                <ProfileInfo
                  nameProfile="Dra. Renata"
                  company="ConfiaMed"
                  specialization="Pediatra"
                />
                <ProfileInfo
                  nameProfile="Dr. Robson"
                  company="UltraMed"
                  specialization="Fisioterápia"
                />
                <ProfileInfo
                  nameProfile="Dra. Bruna"
                  company="FloripaMed"
                  specialization="Psicologia"
                />
              </div>

              <div className="flex flex-col w-full pt-10 ">
                <Datepicker />
              </div>
            </div>
            <div className="w-full">
              <h4>Agendamentos</h4>
              <div className="flex flex-col gap-4">
                <SetAppointment
                  appointmentTime="09:00"
                  patientName="João"
                  appointmentDescription="Consulta confirmada."
                  setNew={true}
                />
                <SetAppointment appointmentTime="12:00"/>
                <SetAppointment appointmentTime="15:00"/>
                <SetAppointment appointmentTime="16:00"/>
                <SetAppointment appointmentTime="17:00"/>
              </div>
            </div>
          </div>
        </section>
      ) : null}
      {contentView === "diary" ? <section>Conteudo Agenda</section> : null}
    </main>
  );
}

export default ContentMain;
