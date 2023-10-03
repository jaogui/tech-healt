import React from "react";
import { DollarSign, UserCheck, AlarmPlus, ScrollText } from "lucide-react";
import NumberCounter from '../utils/animates/NumberCounter'

export function DashboardBlock({
  title,
  infoContentMain,
  infoContentSecondary,
  backgroundView,
  description,
  iconName,
  labelInfo
}) {
  const stylesDashboardBlock = {
    background: backgroundView,
  };

  const renderIcon = (iconName) => {
    switch (iconName) {
      case "icon1":
        return <DollarSign size={20} />;
        break;
      case "icon2":
        return <UserCheck size={20} />;
        break;
      case "icon3":
        return <AlarmPlus size={20} />;
        break;
      case "icon4":
        return <ScrollText size={20} />;
        break;
      default:
        return null;
    }
  };

  return (
    <div
      style={stylesDashboardBlock}
      className="w-full max-w-[370px] rounded-md border border-slate-200 h-[200px] p-5 flex flex-col justify-center gap-4 shadow-sm relative font-Montserrat"
    >
      <span className="absolute top-2 right-2"> {renderIcon(iconName)}</span>
      <h4 className="uppercase flex items-center justify-between text-sm font-semibold">
        {title}
      </h4>
      <article className="flex items-center gap-2">
        <p>{labelInfo}</p>
        <div className="text-4xl">
          <NumberCounter endValue={infoContentMain} />
          </div>
        <span className="text-sm">{infoContentSecondary}</span>
      </article>
      <span className="text-sm">{description}</span>
    </div>
  );
}
