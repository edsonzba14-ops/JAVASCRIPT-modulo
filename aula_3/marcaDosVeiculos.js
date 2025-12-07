const veiculos = [
  { montadora: "Fiat", modelo: "Uno", ano: 2015 },
  { montadora: "VW", modelo: "Gol", ano: 2010 },
  { montadora: "Chevrolet", modelo: "Onix", ano: 2020 },
  { montadora: "Ford", modelo: "Ka", ano: 2014 },
  { montadora: "Hyundai", modelo: "HB20", ano: 2018 },
];

veiculos.forEach(function (carro) {
  console.log(carro.montadora);
});
