function name(params) {
console.log(params);
    
}

const arrow = valor => valor * 4;

const teste = (a, b) => {
    return a + b;
}

const teste1 = () => {
    return 2 + 4;
}

//// SOBRE ARROW FUNCTION:
// - Jeito mais curto de escrever função
// - Se for 1 linha, retorna sozinho (sem "return")
// - Não cria seu próprio "this" (usa o de fora)
// - Não funciona com "new"
// - Ótima pra funções rápidas e callbacks


