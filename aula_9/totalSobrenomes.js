const nomeCompleto = ["Edson", "Zanon", "Beraldini", "Abreu"];

const [primeiroNome, ...sobrenomes] = nomeCompleto;

console.log(`Primeiro nome: ${primeiroNome}`);

console.log(`Total de sobrenomes: ${sobrenomes.length}`);
