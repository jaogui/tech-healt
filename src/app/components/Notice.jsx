import React from "react";

function Notice({ titleNotice, descriptionNotice, idCheckbox, priority }) {
  const styleNotices ={
    background: priority
  }

  return (
    <label
      htmlFor={idCheckbox}
      style={styleNotices}
      className="w-full border text-sm rounded-sm bg-slate-100 p-2 border-slate-200 flex gap-4 cursor-pointer shadow-sm"
    >
      <input type="checkbox" id={idCheckbox} />
      <div className="flex flex-col text-sm">
        <p className="text-slate-800 font-semibold">{titleNotice}</p>
        <p className="">{descriptionNotice}</p>
      </div>
    </label>
  );
}

export default Notice;
