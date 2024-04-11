import { Animal } from "./Animal.js";

export class Aquaticos extends Animal{
    nadar () {
        console.log(`${this.nome} está a nadar`)
    };
};