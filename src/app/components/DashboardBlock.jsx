import React from "react";

function DashboardBlock({
  title,
  infoContentMain,
  infoContentSecondary,
  backgroundView,
  description,
}) {
  return (
    <div className="w-[350px] rounded-md border border-slate-200 h-[200px] p-5 flex flex-col justify-center gap-4">
      <h4 className="uppercase text-sm font-semibold">{title}</h4>
      <article className="flex items-center gap-2">
        <p className="text-4xl">{infoContentMain}</p>
        <span className="text-sm">{infoContentSecondary}</span>
      </article>
      <span className="text-sm">{description}</span>
    </div>
  );
}

export default DashboardBlock;
