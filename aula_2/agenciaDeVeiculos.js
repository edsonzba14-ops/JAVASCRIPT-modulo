const veiculos = [
  {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2015,
    valorCompra: 12000,
    valorAtual: 18000,
    cor: "Prata",
  },
  {
    marca: "VW",
    modelo: "Gol",
    ano: 2010,
    valorCompra: 10000,
    valorAtual: 15000,
    cor: "Branco",
  },
  {
    marca: "Chevrolet",
    modelo: "Onix",
    ano: 2020,
    valorCompra: 35000,
    valorAtual: 48000,
    cor: "Preto",
  },
];

const calcLucro = (valorCompra) => {
  return valorCompra * 0.03;
};

const calcIPVA = (valorAtual) => {
  return valorAtual * 0.04;
};

const calcLicenciamento = (ano) => {
  const anoAtual = new Date().getFullYear();
  const idade = anoAtual - ano;

  if (idade <= 10) {
    return 160;
  } else {
    return 0;
  }
};

const veiculosComCalculos = veiculos.map((carro) => {
  return {
    marca: carro.marca,
    modelo: carro.modelo,
    ano: carro.ano,
    valorCompra: carro.valorCompra,
    valorAtual: carro.valorAtual,
    cor: carro.cor,
    lucro: calcLucro(carro.valorCompra),
    ipva: calcIPVA(carro.valorAtual),
    licenciamento: calcLicenciamento(carro.ano),
  };
});

console.log(veiculosComCalculos);
