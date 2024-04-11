export class Produto {

    constructor(id, nome, quantidade, preco) {
        this.id = id;
        this.nome = nome;
        this.quantidade = quantidade;
        this.preco = preco;
    };

    adicionarQuantidade(qtd) {
        this.quantidade += qtd
        // this.quantidade = this.quantidade + qtd
        // console.log(this.quantidade)
    }

    removerQuantidade(qtd) {
        if (this.quantidade >= qtd) {
            this.quantidade -= qtd;
            console.log(`Quantidade retirada. Sobram ${this.quantidade}`)
        } else {
            console.log(`Quantidade insuficiente no estoque. Tens ${this.quantidade}`)
        };
    };

};

// module.export = Produto

// const produto01 = new Produto(1, "Banana", 0, 2.50);
// const produto02 = new Produto(2, "Maça", 100, 5.50);

// console.log(produto01)
// produto01.adicionarQuantidade(24)
// console.log(produto01)

// produto01.removerQuantidade(24)