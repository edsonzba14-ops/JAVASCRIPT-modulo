/* const nome1 = {nome: "Gabriela"};
const nome = '{"nome": "Gabriela"}';

console.log(nome1);
console.log(nome); */

const carro = {
    modelo: "Brasilia",
    ano: 1967
}

console.log(carro);
console.log(typeof carro);

const carroJson = JSON.stringify(carro);

console.log(carroJson);
console.log(typeof carroJson);

//Para transformar JSON em objeto

const carroJson1 = '{"modelo": "Brasilia", "ano": 1967}';
console.log("carroJson1");
console.log(carroJson1);
console.log(typeof carroJson1);

const carroObj = JSON.parse(carroJson1);

console.log(carroObj);
console.log(typeof carroObj);