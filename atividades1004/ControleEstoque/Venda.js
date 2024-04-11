import { Produto } from "./Produto.js";
import { ItemVenda } from "./ItemVenda.js";

export class Venda {
    constructor ( ) {
        this.itens = [];
    };
    
    adicionarItem (item) {
        this.itens.push(item)
    };

    calcularTotal () {
        return this.itens.reduce((total,item) => total + item.calcularSubtotal() , 0 );
    };

};

// Exemplo de uso

const produto01 = new Produto(54, "Camiseta", 50, 130.00);
const produto02 = new Produto(67, 'meias', 50, 50.00)
const item01 = new ItemVenda (produto01, 30)
const item02 = new ItemVenda (produto02, 20)
const venda = new Venda();

venda.adicionarItem(item01);
venda.adicionarItem(item02);
console.log(venda)
console.log(venda.calcularTotal());