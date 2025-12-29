"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//AULA 1 - TIPO DE OBJETO PARA FUNCAO COM INTERFACE
console.log("");
console.log("AULA 1");
console.log("");
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e o preco: ${product.price}`);
    if (product.isAvailable) {
        console.log("Produto disponivel.");
    }
    else {
        console.log(`Produto nao esta disponivel.`);
    }
}
const shirt = {
    name: "Camisa",
    price: 18.99,
    isAvailable: true
};
showProductDetails(shirt);
showProductDetails({ name: "Caneta", price: 0.99, isAvailable: false });
//AULA 2 - PARAMETROS OPCIONAIS NAS INTERFACES
console.log("");
console.log("AULA 2");
console.log("");
function showUserDetails(user) {
    if (user.email) {
        console.log(`O usuario se chama: ${user.name} e tem email: ${user.email}`);
    }
    else {
        console.log(`Usuario se chama ${user.name}`);
    }
}
const userA = {
    name: "Lucas",
    email: "lucasfgomes166@outlook.com"
};
const userB = {
    name: "Pedro"
};
showUserDetails(userA);
showUserDetails(userB);
//AULA 3- READONLY
console.log("");
console.log("AULA 3");
console.log("");
const fusca = {
    brand: "VolksWagen",
    wheels: 4
};
console.log(fusca);
//fusca.wheels = 5  NAO DEIXA ALTERAR
//AULA 4- INDEX SIGNATURE
console.log("");
console.log("AULA 4");
console.log("");
let coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
//AULA 5- EXTENDS TYPES
console.log("");
console.log("AULA 5");
console.log("");
const human1 = {
    name: "Pedro",
    age: 26
};
const superHuman1 = {
    name: "Lucas",
    age: 26,
    superPowers: "Force"
};
const superHuman2 = {
    name: "Vitor",
    age: 26,
    superPowers: "Fire"
};
const superHuman3 = {
    name: "Paulo",
    age: 26,
    superPowers: "Ice"
};
console.log(human1);
console.log(superHuman1);
console.log(superHuman2);
console.log(superHuman3);
//AULA 6 - INTERSECTION TYPES
console.log("");
console.log("AULA 6");
console.log("");
const arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
};
console.log(arnold);
console.log(arnold.caliber);
//AULA 7 - ReadOnlyArray
console.log("");
console.log("AULA 7");
console.log("");
let myArray = ["Laranja", "Banana", "Abacaxi"];
//myArray[3] = "Tomate"
console.log(myArray);
myArray.forEach((item) => {
    console.log("Fruta: " + item);
});
myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
//AULA 8 - Tuplas
console.log("");
console.log("AULA 8");
console.log("");
//number[]
const myNumbers = [1, 2, 3, 4, 5];
//const myNumber2: fiveNumbers = [1, 2, 3, 4, 5, 6]
//const myNumber3: fiveNumbers = [1, "dois", 3, 4, true, 6]
console.log(myNumbers);
const person1 = ["Lucas", 26];
console.log(person1[0]);
console.log(person1);
//AULA 9 - Tuplas com Readonly
console.log("");
console.log("AULA 9");
console.log("");
function showNumbers(number) {
    console.log(number[0]);
    console.log(number[1]);
}
showNumbers([1, 2]);
//# sourceMappingURL=index.js.map