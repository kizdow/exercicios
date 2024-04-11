var Carro = function (marca, potenciaMotor) {
    this.marca = marca;
    this.potenciaMotor = potenciaMotor;

    this.andar = function (acordado) {
        if (acordado == true) {
            console.log("andou")
        } else {
            console.log("não durma no volante")
        }
    };
};
let acordado
var carro = new Carro("Renault", "1.8");
console.log(carro.andar(false));

console.log(carro.potenciaMotor)
carro.potenciaMotor = "4.1"
console.log(carro.potenciaMotor)

var carros = [
    marca = "Gm",
    potenciaMotor = "2.0"
];
console.log(carros.marca, carros.potenciaMotor)
