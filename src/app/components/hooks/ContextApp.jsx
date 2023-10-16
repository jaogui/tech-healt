import { api } from "@/app/lib/axios";
import { createContext, useState, useEffect } from "react";

const contextApp = createContext(null);

function ContextProvider({ children }) {
  const [contentView, setContentView] = useState("appointments");
  const [qtdNotice, setQtdNotice] = useState([]);
  const [formNewAppointment, setFormNewAppointment] = useState([]);
  const [appointmentsGet, setAppointmentsGet] = useState([]);
  const [onDataFetch, setOnDataFetch] = useState(false)

  //Armazena todas as noticias/notificações dentro de um array visualizadas.
  function addNotice(notice) {
    setQtdNotice((prevQtdNotice) => [...prevQtdNotice, notice]);
  }

  //Remove item do array
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

  useEffect(()=>{
    if(!onDataFetch){
    DataFetching('/appointment', setAppointmentsGet)
    console.log(appointmentsGet)
    setOnDataFetch(true)
  }
  },[onDataFetch, setOnDataFetch])

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
        appointmentsGet,
      }}
    >
      {children}
    </contextApp.Provider>
  );
}

export { contextApp, ContextProvider };
