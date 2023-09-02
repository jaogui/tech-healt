import { useState, useContext, useEffect } from "react";
import { contextApp } from "../utils/ContextApp";

function Notice({ titleNotice, descriptionNotice, idCheckbox, priority }) {
  const [actionNotice, setActionNotice] = useState(true);
  const [noticeView, setNoticeView] = useState(true);

  const { addNotice, removeNotice } = useContext(contextApp);

  function handleNotice() {
    setNoticeView(false);
    setTimeout(() => {
      setActionNotice(false);
      //Isso não está adequado, remove sempre o item 0 mas não o item clicado.
      removeNotice(0);
    }, 800);
  }

  //Adiciona noticia assim que renderizada
  useEffect(() => {
      addNotice({
        title: titleNotice,
        description: descriptionNotice,
        id: idCheckbox,
      });
  }, []);

  return (
    <>
      {actionNotice && (
        <label
          htmlFor={idCheckbox}
          style={{ background: priority }}
          className={`w-full border text-sm rounded-sm bg-slate-200 py-3 px-4 border-slate-200 flex gap-4 cursor-pointer shadow-sm ${
            noticeView ? "" : "animateOpacity"
          }`}
        >
          <input type="checkbox" id={idCheckbox} onChange={handleNotice} />
          <div className="flex flex-col text-sm">
            <p className="text-slate-800 font-semibold">{titleNotice}</p>
            <p className="">{descriptionNotice}</p>
          </div>
        </label>
      )}
    </>
  );
}

export default Notice;
