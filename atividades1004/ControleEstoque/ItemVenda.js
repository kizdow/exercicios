import { Produto } from './Produto.js'

export class ItemVenda {
    constructor( produto, quantidade) {
        this.produto = produto;
        this.quantidade = quantidade;
        this.precoUnitario = produto.preco;
    };

    calcularSubtotal () {
        return this.quantidade * this.precoUnitario
    };

};
