export function InputForm({ htmlForLabel, labelInput, nameInput, idInput, onChangeInput, placeHolder, valueInput }) {
  return (
    <label htmlFor={htmlForLabel} className="flex flex-col gap-1 text-sm py-2">
      {labelInput}
      <input
        type="text"
        name={nameInput}
        id={idInput}
        required
        className="bg-slate-200 py-1 px-2 rounded-sm focus:bg-white"
        onChange={onChangeInput}
        placeholder={placeHolder}
        value={valueInput}
      />
    </label>
  );
}
