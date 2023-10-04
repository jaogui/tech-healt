import { InputSeach } from "../form/InputSeach";
import { AppointmentInfo } from "../ui/AppointmentInfo";

export function AppointmentRegister() {

  return (
    <section className="slideFromRight">
      <div className="py-1">
        <InputSeach />
      </div>
      <h3 className="text-2xl my-4 flex justify-between items-center font-Montserrat border-b border-slate-300 ">
        Consultas Agendadas
      </h3>
      <div className="flex gap-5 flex-wrap">
        <AppointmentInfo
          serviceInfo="Avaliação"
          clientName="Vitor Luiz Almeida"
          clientID="099.999.999-01"
          doctorName="Dra. Renata"
          doctorSpecialization="Fisioterapeuta"
          clientDate="26/07/1999"
          data
        />
        <AppointmentInfo
          serviceInfo="Avaliação"
          clientName="José"
          clientID="099.555.741-01"
          doctorName="Dr. Luiz"
          doctorSpecialization="Clínico"
          clientDate="11/06/1895"
        />
        <AppointmentInfo
          serviceInfo="Avaliação"
          clientName="Junior"
          clientID="099.444.245-01"
          doctorName="Dr. Paulo"
          doctorSpecialization="Fisioterapeuta"
          clientDate="10/04/1980"
        />
        <AppointmentInfo
          serviceInfo="Exame"
          clientName="Gabriel"
          clientID="099.999.741-01"
          doctorName="Dr. Renato"
          doctorSpecialization="Ortopedista"
          clientDate="05/12/1972"
        />
      </div>
    </section>
  );
}
