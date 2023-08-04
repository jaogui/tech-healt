import { React, useContext } from "react";
import { contextApp } from "../ContextApp";
import DashboardBlock from "../components/DashboardBlock"

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
        </section>
      ) : null}
      {contentView === "routine" ? <section>Conteudo Rotina</section> : null}
      {contentView === "diary" ? <section>Conteudo Agenda</section> : null}
    </main>
  );
}

export default ContentMain;
