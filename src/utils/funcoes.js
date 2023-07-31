// pasta para funcoes reutilizaveis

export default function timeFormat(sec) {
  // Converte o valor em uma string
  const secString = sec.toString();
  const minutes = Math.floor(secString / 60); // Arredonda para baixo os minutos

  // Formata o resultado
  const formatedTime = `${minutes}:${sec % 60}`;

  // Retorna o tempo formatado  string
  return formatedTime;
}