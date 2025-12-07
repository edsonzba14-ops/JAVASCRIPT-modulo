class ContaBancaria {
    constructor(saldoInicial){
        this._saldo = saldoInicial;
    }

    interpolação(){
        return `saldo do dia ${this.saldo}`
    }
}

const conta = new ContaBancaria(1000);

console.log(conta);
