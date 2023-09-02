import { createContext, useState, useEffect } from "react"; 

const contextApp = createContext(null);

function ContextProvider({children}) {
  const [contentView, setContentView] = useState("workflow")
  const [qtdNotice, setQtdNotice] = useState([]);

  //Armazena todas as noticias/notificações dentro de um array visualizadas.
  function addNotice(notice){
    setQtdNotice((prevQtdNotice) => [...prevQtdNotice, notice]);
  }

  //Remove item do array
  function removeNotice(indexToRemove) {
    setQtdNotice((prevQtdNotice) =>
      prevQtdNotice.filter((_, index) => index !== indexToRemove)
    );
  }

  return (
    <contextApp.Provider 
      value={
        {contentView, setContentView, qtdNotice, addNotice, removeNotice}
      }
    >
      {children}
    </contextApp.Provider>
  )
}

export {contextApp, ContextProvider};
