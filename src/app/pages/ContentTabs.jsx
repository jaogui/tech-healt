import { useContext, useEffect } from "react";
import { Workflow } from "../components/sections/Workflow";
import { RoutineManagement } from "../components/sections/RoutineManagement";
import { AppointmentRegister } from "../components/sections/AppointmentRegisters";
import { contextApp } from "../components/hooks/ContextApp";

export function ContentTabs() {
  const { contentView } = useContext(contextApp);

  // Mantenha os componentes em estados
  const workflowComponent = <Workflow />;
  const routineComponent = <RoutineManagement />;
  const appointmentsComponent = <AppointmentRegister />;

  // Renderize o componente com base no contentView
  let contentToRender;
  if (contentView === "workflow") {
    contentToRender = workflowComponent;
  } else if (contentView === "routine") {
    contentToRender = routineComponent;
  } else if (contentView === "appointments") {
    contentToRender = appointmentsComponent;
  }

  return <main className="px-9 py-6">{contentToRender}</main>;
}
