"use strict";
//EXERCICIO 1
Object.defineProperty(exports, "__esModule", { value: true });
class Carro {
    constructor(name, brand, year) {
        this.engine = 2.0;
        this.name = name;
        this.brand = brand;
        this.year = year;
    }
}
const car1 = new Carro("Cruze", "Chevrolet", 2014);
const car2 = new Carro("Uno Mille", "Fiat", 1994);
const car3 = new Carro("Corolla", "Toyota", 2008);
function showCars(carro) {
    return console.log(`Carro: ${carro.name}, Marca: ${carro.brand}, Ano: ${carro.year} e Motor: ${carro.engine.toFixed(1)}`);
}
showCars(car1);
showCars(car2);
showCars(car3);
//# sourceMappingURL=index.js.map