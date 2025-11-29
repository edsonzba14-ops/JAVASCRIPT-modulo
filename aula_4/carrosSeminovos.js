const veiculos = [
  { montadora: "Fiat", modelo: "Uno", ano: 2015 },
  { montadora: "VW", modelo: "Gol", ano: 2010 },
  { montadora: "Chevrolet", modelo: "Onix", ano: 2025 },
  { montadora: "Ford", modelo: "Ka", ano: 2023 },
  { montadora: "Hyundai", modelo: "HB20", ano: 2018 },
];

const anoAtual = new Date().getFullYear();

const carrosNovos = veiculos.filter((carro) => {
  return anoAtual - carro.ano < 3;
});

console.log(carrosNovos);

