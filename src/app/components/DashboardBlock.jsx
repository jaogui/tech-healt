import React from "react";
import { DollarSign, UserCheck, AlarmPlus, ScrollText } from "lucide-react";

function DashboardBlock({
  title,
  infoContentMain,
  infoContentSecondary,
  backgroundView,
  description,
  iconName,
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
      className="w-full max-w-[370px] rounded-md border border-slate-200 h-[200px] p-5 flex flex-col justify-center gap-4 shadow-sm relative"
    >
      <span className="absolute top-2 right-2"> {renderIcon(iconName)}</span>
      <h4 className="uppercase flex items-center justify-between text-sm font-semibold">
        {title}
      </h4>
      <article className="flex items-center gap-2">
        <p className="text-4xl">{infoContentMain}</p>
        <span className="text-sm">{infoContentSecondary}</span>
      </article>
      <span className="text-sm">{description}</span>
    </div>
  );
}

export default DashboardBlock;
