import { useState, useEffect, useContext } from "react";
import { DashboardBlock } from "../ui/DashboardBlock";
import { Notification } from "../feedback/Notification";
import { Datepicker } from "../ui/Datepicker";
import { InputSeach } from "../form/InputSeach";
import { contextApp } from "../hooks/ContextApp";
import  {api } from '../../lib/axios'
import { Smile } from "lucide-react";

export function Workflow() {
  const [initialNoticesAdded, setInitialNoticesAdded] = useState(false);
  const { qtdNotice, addNotice } = useContext(contextApp);


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


  return (
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
            <h3 className="text-xl py-3 font-Montserrat">Avisos e Lembretes</h3>
            <div className="flex gap-2 h-full">
              <div className="flex flex-col gap-4 w-full">
                {qtdNotice.length !== 0 && initialNoticesAdded === true ? (
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
  );
}
