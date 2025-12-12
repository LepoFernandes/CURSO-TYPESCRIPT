//EXERCICIO 1
var Carro = /** @class */ (function () {
    function Carro(name, brand, year) {
        this.engine = 2.0;
        this.name = name;
        this.brand = brand;
        this.year = year;
    }
    return Carro;
}());
var car1 = new Carro("Cruze", "Chevrolet", 2014);
var car2 = new Carro("Uno Mille", "Fiat", 1994);
var car3 = new Carro("Corolla", "Toyota", 2008);
function showCars(carro) {
    return console.log("Carro: ".concat(carro.name, ", Marca: ").concat(carro.brand, ", Ano: ").concat(carro.year, " e Motor: ").concat(carro.engine.toFixed(1)));
}
showCars(car1);
showCars(car2);
showCars(car3);
