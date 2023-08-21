import { React, useContext } from "react";
import { contextApp } from "../utils/ContextApp";
import DashboardBlock from "../components/DashboardBlock";
import Notice from "../components/Notice";
import Datepicker from "../components/Datepicker";
import InputSeach from "../components/InputSeach";
import ProfileInfo from "../components/ProfileInfo";
import SetAppointment from "../components/SetAppointment";
import SchedulingInfo from "../components/SchedulingInfo";

function ContentMain() {
  const { contentView } = useContext(contextApp);

  const customDatePickerStyle = {
    "--rdp-cell-size": "65px",
  };

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
              <div className="flex gap-4 py-2 flex-wrap">
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
              <div className="flex gap-6 w-full">
                <div className="w-full">
                  <h3 className="text-xl py-3 font-Montserrat">Avisos</h3>
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
                    <Notice
                      titleNotice="Aviso de solicitação"
                      idCheckbox="warningEdit2"
                      descriptionNotice="Bruno confirmou agendamento de consulta."
                    />
                  </div>
                </div>
                <div className="w-full">
                  <h3 className="text-xl py-3 font-Montserrat">Lembretes</h3>
                  <div className="flex flex-col w-full gap-4">
                    <Notice
                      titleNotice="Lembrete de consulta"
                      idCheckbox="reminderQuery"
                      descriptionNotice="Consulta ás 15:00 com Luciana."
                    />

                    <Notice
                      priority={`#67c8deb5`}
                      titleNotice="Lembrete de confirmação"
                      idCheckbox="reminderConfirm"
                      descriptionNotice="Confirmar consulta do Luciano."
                    />
                    <Notice
                      titleNotice="Lembrete de confirmação"
                      idCheckbox="reminderConfirm2"
                      descriptionNotice="Confirmar consulta do Bruno."
                    />
                    <Notice
                      priority={`#67c8deb5`}
                      titleNotice="Lembrete de confirmação"
                      idCheckbox="warningEdit3"
                      descriptionNotice="Marcela solicitou solicitou contato para remarcar a consulta"
                    />
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
        <section className="slideFromRight">
          <div className="flex w-full justify-between gap-6">
            <div className="w-full max-w-[550px]">
              <h4 className="pb-4 text-lg font-Montserrat">Médicos</h4>
              <div className="flex flex-col gap-4">
                <ProfileInfo
                  nameProfile="Dra. Renata"
                  company="MedBrasil"
                  specialization="Pediatria"
                  status="Atendendo"
                />
                <ProfileInfo
                  nameProfile="Dr. Robson"
                  company="MedBrasil"
                  specialization="Fisioterapia"
                  status="Disponível"
                />
                <ProfileInfo
                  nameProfile="Dra. Bruna"
                  company="MedBrasil"
                  specialization="Psicologia"
                  status="Ausente"
                />
              </div>
              <div className="flex flex-col w-full pt-5 ">
                <Datepicker style={customDatePickerStyle} />
              </div>
            </div>
            <div className="w-full">
              <h3 className="pb-4 text-lg font-Montserrat">Agendamentos</h3>
              <div className="flex flex-col gap-4">
                <SetAppointment
                  appointmentTime="09:00"
                  appointmentDate="07/08/2023"
                  clientName="João Guilherme Benine"
                  clientID="555.555.555-10"
                  appointmentDescription="Realização de avalição no consultório com Dr. Robson.. Solicitou documentos."
                  appointmentType="Realização de exame radiográfico."
                  setNew={true}
                />
                <SetAppointment
                  appointmentTime="12:00"
                  appointmentDate="07/08/2023"
                />
                <SetAppointment
                  appointmentTime="15:00"
                  appointmentDate="07/08/2023"
                />
                <SetAppointment
                  appointmentTime="16:00"
                  appointmentDate="07/08/2023"
                />
                <SetAppointment
                  appointmentTime="17:00"
                  appointmentDate="07/08/2023"
                />
              </div>
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
            <SchedulingInfo
              serviceInfo="Avaliação"
              serviceDate="10/08/2023"
              serviceTime="10:00"
              serviceValue="R$: 50,00"
              clientName="Vitor Luiz Almeida"
              clientID="099.999.999-01"
              clienteDate="25/06/1982"
              doctorName="Dra. Renata"
              doctorID="123456"
              doctorSpecialization="Fisioterapeuta"
            />
            <SchedulingInfo
              serviceInfo="Avaliação"
              serviceDate="25/08/2023"
              serviceTime="14:00"
              serviceValue="R$: 50,00"
              clientName="José Silva"
              clientID="099.888.888-01"
              clienteDate="10/02/1992"
              doctorName="Dra. Larissa"
              doctorID="9999"
              doctorSpecialization="Oftalmologia"
            />
            <SchedulingInfo
              serviceInfo="Exame"
              serviceDate="05/11/2023"
              serviceTime="10:00"
              serviceValue="R$: 120,00"
              clientName="Carlos Araujo Maciel Lopes"
              clientID="099.995.859-54"
              clienteDate="25/06/1982"
              doctorName="Dr. Fábio Contante"
              doctorID="44444"
              doctorSpecialization="Cirurgião"
            />
            <SchedulingInfo
              serviceInfo="Raio X"
              serviceDate="18/08/2023"
              serviceTime="11:50"
              serviceValue="R$: 80,50"
              clientName="Bruno Tancredo Rosário"
              clientID="099.999.999-01"
              clienteDate="25/06/1982"
              doctorName="Dra. Renata"
              doctorID="123456"
              doctorSpecialization="Fisioterapeuta"
            />
            <SchedulingInfo
              serviceInfo="Tomografia"
              serviceDate="09/09/2023"
              serviceTime="15:00"
              serviceValue="R$: 180,50"
              clientName="Alice Rosário Mendes Lopes"
              clientID="000.000.000-05"
              clienteDate="25/06/1999"
              doctorName="Dra. Telma Macedo"
              doctorID="11111"
              doctorSpecialization="Radiologista"
            />
            <SchedulingInfo
              serviceInfo="Dermatologia"
              serviceDate="15/08/2023"
              serviceTime="15:00"
              serviceValue="R$: 200,50"
              clientName="Vinicius Cardozo"
              clientID="333.333.333-03"
              clienteDate="25/06/1979"
              doctorName="Dr. Junior Balfini"
              doctorID="22222"
              doctorSpecialization="Dermatologista"
            />
            <SchedulingInfo
              serviceInfo="Vacinas"
              serviceDate="13/08/2023"
              serviceTime="13:05"
              serviceValue="R$: 135,00"
              clientName="Enzo Oliveira"
              clientID="777.777.777-07"
              clienteDate="25/06/2005"
              doctorName="Dr. Gabriel"
              doctorID="8888"
              doctorSpecialization="Pediatria"
            />
          </div>
        </section>
      ) : null}
    </main>
  );
}

export default ContentMain;
