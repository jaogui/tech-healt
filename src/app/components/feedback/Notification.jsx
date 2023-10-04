import { useState, useContext } from "react";
import { contextApp } from "../hooks/ContextApp";

export function Notification({ titleNotice, descriptionNotice, idCheckbox, priority }) {
  const [actionNotice, setActionNotice] = useState(true);
  const [noticeView, setNoticeView] = useState(true);

  const { removeNotice } = useContext(contextApp);

  function handleNotice() {
    setNoticeView(false);
    setTimeout(() => {
      setActionNotice(false);
      //Isso não está adequado, remove sempre o item 0 mas não o item clicado.
      removeNotice(0);
    }, 800);
  }

  return (
    <>
      {actionNotice && (
        <label
          htmlFor={idCheckbox}
          style={{ background: priority }}
          className={`w-full border text-sm rounded-sm bg-slate-200 py-3 px-4 border-slate-200 flex items-center gap-4 cursor-pointer shadow-sm ${
            noticeView ? "" : "animateOpacity"
          }`}
        >
          <input type="checkbox" id={idCheckbox} onChange={handleNotice} className="w-4 h-4 rounded-full" />
          <div className="flex flex-col text-sm">
            <p className="text-slate-800 font-semibold">{titleNotice}</p>
            <p className="">{descriptionNotice}</p>
          </div>
        </label>
      )}
    </>
  );
}
