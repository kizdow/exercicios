import { Aves } from "./Aves.js";
import { Quadrupedes } from "./Quadrupedes.js";    
import { Aquaticos } from "./Aquaticos.js";

const passaro = new Aves("Zeca Urubu","35cm","3kg","25/10/2016")
const cachorro = new Quadrupedes("Coragem","99cm","13kg","14/01/2014")
const peixe = new Aquaticos("Dori","23cm","0.5kg","01/05/1998")

console.log(cachorro.andar())
