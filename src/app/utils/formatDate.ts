export function formatDate(event: React.ChangeEvent<HTMLInputElement>) {
  const valueDate = event.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos
  let formattedDate = valueDate;

  if (valueDate.length > 2) {
    formattedDate = `${valueDate.slice(0, 2)}/${valueDate.slice(2)}`;
  }
  if (valueDate.length > 4) {
    formattedDate = `${formattedDate.slice(0, 5)}/${formattedDate.slice(5)}`;
  }
  return formattedDate
}