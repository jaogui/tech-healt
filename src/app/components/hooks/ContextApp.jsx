import { api } from "@/app/lib/axios";
import { createContext, useState, useEffect } from "react";

const contextApp = createContext(null);

function ContextProvider({ children }) {
  const [contentView, setContentView] = useState("workflow");
  const [qtdNotice, setQtdNotice] = useState([]);
  const [formNewAppointment, setFormNewAppointment] = useState([]);
  const [appointmentsInfo, setAppointmentsInfo] = useState([]);
  const [doctorsInfo, setDoctorsInfo] = useState([]);
  const [notificationInfo, setNotificationInfo] = useState([])

  //Armazena todas as noticias/notificações dentro de um array visualizadas.
  function addNotice(notice) {
    setQtdNotice((prevQtdNotice) => [...prevQtdNotice, notice]);
  }
  //Remove item notificações
  function removeNotice(indexToRemove) {
    setQtdNotice((prevQtdNotice) =>
      prevQtdNotice.filter((_, index) => index !== indexToRemove)
    );
  }

  async function DataFetching( apiUrl, callback ) {
    try {
      const response = await api.get(apiUrl);
      const dataInfo = response.data;
      callback(dataInfo)
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  }

  useEffect(() => {
      DataFetching('/appointment', setAppointmentsInfo);
      DataFetching('/doctors', setDoctorsInfo);
      DataFetching('/notifications', setNotificationInfo);
  }, []);

  return (
    <contextApp.Provider
      value={{
        contentView,
        setContentView,
        qtdNotice,
        addNotice,
        removeNotice,
        formNewAppointment,
        setFormNewAppointment,
        appointmentsInfo,
        doctorsInfo,
        notificationInfo
      }}
    >
      {children}
    </contextApp.Provider>
  );
}

export { contextApp, ContextProvider };
