import { Animal } from "./Animal.js";

export class Quadrupedes extends Animal{
    andar(){
        console.log(`${this.nome} está andando`)
    }
}