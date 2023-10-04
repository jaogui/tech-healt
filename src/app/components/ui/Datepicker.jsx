import { React, useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { ptBR } from "date-fns/locale";
import "../../../../public/styles/datepicker.css";
import "react-day-picker/dist/style.css";

export function Datepicker({ style }) {
  const [selected, setSelected] = useState(null);

  let footer = <p className="datepickerFooter">Selecione uma data..</p>;
  if (selected) {
    footer = (
      <p className="datepickerFooter">
        Data selecionada: {format(selected, "PP")}.
      </p>
    );
  }

  return (
    <div className="datePicker">
      <DayPicker
        style={style}
        mode="single"
        selected={selected}
        onSelect={setSelected}
        footer={footer}
        locale={ptBR}
      />
    </div>
  );
}