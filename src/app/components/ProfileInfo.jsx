import React from "react";
import { User2 } from "lucide-react";

function ProfileInfo({ nameProfile, company, specialization, status }) {
  const getStatusColorClass = (status) => {
    switch (status) {
      case "Ausente":
        return "status-ausente";
      case "Disponível":
        return "status-disponivel";
      case "Atendendo":
        return "status-atendendo";
      default:
        return "";
    }
  };

  const statusClass = getStatusColorClass(status);

  return (
    <article className="bg-slate-50 p-4 shadow-sm border-slate-50 rounded-md flex gap-5 items-center justify-between">
      <div className="flex gap-4 items-center">
        <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center ">
          <User2 size={20} />
        </div>
        <div className="text-sm">
          <span className="flex gap-1">
            Nome:
            <p className="font-semibold">{nameProfile}</p>
          </span>
          <span className="flex gap-1">
            Consultório:
            <p className="font-semibold">{company}</p>
          </span>
          <span className="flex gap-1">
            Especialização:
            <p className="font-semibold">{specialization}</p>
          </span>
        </div>
      </div>
      <div className={`status-indicator ${statusClass}`}>{status}</div>
    </article>
  );
}

export default ProfileInfo;
