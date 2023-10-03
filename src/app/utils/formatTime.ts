export function formatTime(event: React.ChangeEvent<HTMLInputElement>) {
  const valueHorario = event.target.value;
  const numericValue = valueHorario.replace(/\D/g, "");

  if(numericValue.length >= 2){
    const hour = numericValue.slice(0, 2);
    const minutes = numericValue.slice(2, 4);
    const valueFormated = `${hour}:${minutes}`;
    
    return valueFormated;
  }
  return numericValue;
}
