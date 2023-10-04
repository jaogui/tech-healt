import { useContext } from "react";
import { Workflow } from "../components/sections/Workflow";
import { RoutineManagement } from "../components/sections/RoutineManagement";
import { AppointmentRegister } from "../components/sections/AppointmentRegisters";
import { contextApp } from "../components/hooks/ContextApp";

export function ContentTabs() {
  const { contentView } = useContext(contextApp);

  return (
    <main className="px-9 py-6">
      {contentView === "workflow" ? (
        <>
          <Workflow />
        </>
      ) : null}
      {contentView === "routine" ? (
        <>
          <RoutineManagement />
        </>
      ) : null}
      {contentView === "patients" ? (
        <>
          <AppointmentRegister />
        </>
      ) : null}
    </main>
  );
}
