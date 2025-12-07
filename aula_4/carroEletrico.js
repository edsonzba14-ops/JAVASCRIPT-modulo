class Carro {
    constructor(marca, modelo, ano, cor, velocidadeMaxima, combustao) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.velocidadeMaxima = velocidadeMaxima;
        this.combustao = combustao;
    }
}

class CarroEletrico extends Carro {
    constructor(marca, modelo, ano, cor, velocidadeMaxima, capacidadeBateria, autonomia, combustao) {
        super(marca, modelo, ano, cor, velocidadeMaxima, combustao);
        this.capacidadeBateria = capacidadeBateria;
        this.autonomia = autonomia;
    }
}

const carro = new Carro('Fiat', 'Uno', 2020, 'vermelho', 160, true);
console.log(carro);

const eletrico = new CarroEletrico('Tesla', 'Model 3', 2025, 'preto', 250, 75, 500, false);
console.log(eletrico);
                    