import { useState } from "react";

function Notice({ titleNotice, descriptionNotice, idCheckbox, priority }) {
  const [actionNotice, setActionNotice] = useState(true);
  const [noticeView, setNoticeView] = useState(true);

  function handleNotice(event) {
    setNoticeView(false);
    setTimeout(() =>{
      setActionNotice(false);
    }, 800)
  }

  const styleNotices = {
    background: priority,
  };
  return (
    <>
      {actionNotice && (
        <label
          htmlFor={idCheckbox}
          style={styleNotices}
          className={`w-full border text-sm rounded-sm bg-slate-200 py-3 px-4 border-slate-200 flex gap-4 cursor-pointer shadow-sm ${noticeView ? '' : 'animateOpacity'}`}
        >
          <input type="checkbox" id={idCheckbox} onChange={handleNotice}  />
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
