const numeros = [140, 104, 14, 41, 10];

/* const soma = numeros.reduce((acumulado, atual) => acumulado + atual) */
const soma = numeros.reduce((acumulado, atual) => {
    console.log("acumulado");
    console.log(acumulado);
    console.log("atual");
    console.log(atual);

    return acumulado + atual
});

console.log('soma');
console.log(soma);
