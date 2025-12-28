let carro = (function () {
  const anoFabricacao = 2024;
  const mesFabricacao = 8;

  const anoModelo = mesFabricacao <= 7 
    ? anoFabricacao 
    : anoFabricacao + 1;

  console.log("Ano de fabricação:", anoFabricacao);
  console.log("Ano modelo:", anoModelo);
})();
