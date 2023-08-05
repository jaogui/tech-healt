import { React, useState } from "react";
import { format } from "date-fns";
import {DayPicker} from "react-day-picker";
import { ptBR } from 'date-fns/locale';
import "../../../public/styles/datepicker.css";


function Datepicker() {
  const [selected, setSelected] = useState(null);

  let footer = <p>Selecione uma data..</p>;
  if (selected) {
    footer = <p>Data selecionada: {format(selected, "PP")}.</p>;
  }

  return (
    <div className="datePicker">
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        footer={footer}
        locale={ptBR}
      />
    </div>
  );
}

export default Datepicker;
