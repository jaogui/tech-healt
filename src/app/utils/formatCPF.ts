export function formatCPF(event: React.ChangeEvent<HTMLInputElement>) {
  const valueCpf = event.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos
  let formattedCpf = valueCpf;

  if (valueCpf.length > 3) {
    formattedCpf = `${valueCpf.slice(0, 3)}.${valueCpf.slice(3)}`;
  }
  if (valueCpf.length > 6) {
    formattedCpf = `${formattedCpf.slice(0, 7)}.${formattedCpf.slice(7)}`;
  }
  if (valueCpf.length > 9) {
    formattedCpf = `${formattedCpf.slice(0, 11)}-${formattedCpf.slice(11)}`;
  }

  return formattedCpf
}