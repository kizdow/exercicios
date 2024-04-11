//private,public,protected são os mais usados
//private: só a classe original pode user o método
//protected: todas as heranças podem usar

/**
 * Encapsulamento é a prática de ocultar detalhes internos de uma classe
 * e expor apenas o necessário para o uso externo.
 * Isso é feito através de uso de propriedades e métodos privados,
 * garantindo que o estado interno do objeto não possa ser modificado 
 * diretamente de fora da classe
 * 
 * Nesse exemplo, a classe ContaBancaria tem uma propriedade privada: #saldo 
 * que não pode ser acessado ou modificado diretamente de fora da classe.
 * Métodos públicos como Depositar,Sacar e VisualizarSaldo permitem interagir
 * com o saldo de maneira controlada, garantindo que operações válidas possam
 * ser realizadas, como depositar um valor positivo ou sacar um valor que saja menor 
 * ou igual ao saldo atual. Isso exemplifica o encapsulamento, protegendo o estado
 * interno do objeto.
 */

class ContaBancaria {
    #saldo; // <= Proriedade privada 
    
    //* Para privar uma classe usa-se # e sempre deve contar o # *

    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }

    // Método Set (Atribuir valores para o meu atributo privado)

    depositar(valor) {
        //Para depositar precisa precisa ser >0
        if (valor > 0) {
            this.#saldo += valor;
            console.log(`Depósito de R$${valor} efetuado com sucesso.`);
        } else {
            console.log(`Valor de depósito deve ser positivo.`);
        }
    }

    // Método Get (para recuperar o valor do saldo do atributo privado)

    visualizarSaldo() {
        console.log(`Saldo atual: R$${this.#saldo}`);
    }

    sacar(valor) {
        if (this.#saldo >= valor) {
            this.#saldo -= valor
            console.log(`Saque de R$${valor} efetuado, restam R$${this.#saldo} na conta`);
        } else {
            console.log("O valor de saque é maior que seu saldo")
        };
    };
};

const minhaConta = new ContaBancaria(500);
// minhaConta.visualizarSaldo()
// minhaConta.depositar(700)
// minhaConta.visualizarSaldo()

minhaConta.sacar(-100)