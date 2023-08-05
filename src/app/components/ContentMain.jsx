import { React, useContext } from "react";
import { contextApp } from "../ContextApp";
import DashboardBlock from "../components/DashboardBlock";
import Notice from "../components/Notice";

function ContentMain() {
  const { contentView } = useContext(contextApp);

  return (
    <main className="px-5 py-8">
      {contentView === "workflow" ? (
        <section className="px-5 py-5">
          <div className="">
            <h3 className="text-2xl">Dashboard Info</h3>
            <div className="flex gap-4 py-2 flex-wrap">
              <DashboardBlock
                title="Agendamentos do dia"
                infoContentMain="50"
                infoContentSecondary="Agendados"
                description="Verifique seus agendamentos do dia"
              />
              <DashboardBlock
                title="Atendimentos do dia"
                infoContentMain="175"
                infoContentSecondary="Atendidos"
                description="Atendimentos realizados no dia"
              />
              <DashboardBlock
                title="Avisos"
                infoContentMain="14"
                infoContentSecondary="Avisos"
                description="Verifique avisos importantes"
              />
              <DashboardBlock
                title="Lambretes"
                infoContentMain="26"
                infoContentSecondary="Lembretes"
                description="Lembretes adicionados"
              />
            </div>
          </div>

          <div className="flex w-full gap-2">
            <div className="grid grid-flow-col max-w-[700px] gap-4 w-full items-center">
              <div className="w-full">
                <h3 className="text-2xl py-3">Avisos</h3>
                <div className="flex flex-col gap-2 w-full ">
                  <Notice
                    priority={`#de6767b5`}
                    titleNotice="Aviso de consulta"
                    idCheckbox="warningEdit"
                    descriptionNotice="Luciano solicitou consulta para terça-feira."
                  />
                  <Notice
                    titleNotice="Aviso de consulta"
                    idCheckbox="warningConfirm"
                    descriptionNotice="Luciana confirmou horário."
                  />
                  <Notice
                    titleNotice="Aviso de consulta"
                    idCheckbox="warningCancel"
                    descriptionNotice="Vivian cancelou consulta."
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl py-3">Lembretes</h3>
                <div className="flex flex-col w-full gap-2">
                  <Notice
                    titleNotice="Lembrete de consulta"
                    idCheckbox="reminderQuery"
                    descriptionNotice="Consulta hoje ás 15:00 com Luciana."
                  />
                  <Notice
                    priority={`#de6767b5`}
                    titleNotice="Lembrete de consulta"
                    idCheckbox="reminderInfo"
                    descriptionNotice="Remarcar consulta com Vivian."
                  />
                  <Notice
                    priority={`#67c8deb5`}
                    titleNotice="Lembrete de consulta"
                    idCheckbox="reminderConfirm"
                    descriptionNotice="Confirmar consulta do Luciano."
                  />
                </div>
              </div>
            </div>

            {/* <div className="">
              <h3 className="text-2xl">Agendamentos</h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              fuga consectetur recusandae? Quis accusantium, dicta assumenda et
              reprehenderit aut adipisci, nihil ullam fuga aspernatur minima
              voluptates, asperiores itaque. Similique, vel?
            </div> */}
          </div>
        </section>
      ) : null}
      {contentView === "routine" ? <section>Conteudo Rotina</section> : null}
      {contentView === "diary" ? <section>Conteudo Agenda</section> : null}
    </main>
  );
}

export default ContentMain;
