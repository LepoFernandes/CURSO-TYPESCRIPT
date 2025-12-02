//AULA 1 - TIPO DE OBJETO PARA FUNCAO COM INTERFACE
console.log("");
console.log("AULA 1");
console.log("");
function showProductDetails(product) {
    console.log("O nome do produto \u00E9 ".concat(product.name, " e o preco: ").concat(product.price));
    if (product.isAvailable) {
        console.log("Produto disponivel.");
    }
    else {
        console.log("Produto nao esta disponivel.");
    }
}
var shirt = {
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
        console.log("O usuario se chama: ".concat(user.name, " e tem email: ").concat(user.email));
    }
    else {
        console.log("Usuario se chama ".concat(user.name));
    }
}
var userA = {
    name: "Lucas",
    email: "lucasfgomes166@outlook.com"
};
var userB = {
    name: "Pedro"
};
showUserDetails(userA);
showUserDetails(userB);
//AULA 3- READONLY
console.log("");
console.log("AULA 3");
console.log("");
var fusca = {
    brand: "VolksWagen",
    wheels: 4
};
console.log(fusca);
//fusca.wheels = 5  NAO DEIXA ALTERAR
//AULA 4- INDEX SIGNATURE
console.log("");
console.log("AULA 4");
console.log("");
var coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
//AULA 5- EXTENDS TYPES
console.log("");
console.log("AULA 5");
console.log("");
var human1 = {
    name: "Pedro",
    age: 26
};
var superHuman1 = {
    name: "Lucas",
    age: 26,
    superPowers: "Force"
};
var superHuman2 = {
    name: "Vitor",
    age: 26,
    superPowers: "Fire"
};
var superHuman3 = {
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
var arnold = {
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
var myArray = ["Laranja", "Banana", "Abacaxi"];
//myArray[3] = "Tomate"
console.log(myArray);
myArray.forEach(function (item) {
    console.log("Fruta: " + item);
});
myArray.map(function (item) {
    return "Fruta: ".concat(item);
});
console.log(myArray);
//AULA 8 - Tuplas
console.log("");
console.log("AULA 8");
console.log("");
//number[]
var myNumbers = [1, 2, 3, 4, 5];
//const myNumber2: fiveNumbers = [1, 2, 3, 4, 5, 6]
//const myNumber3: fiveNumbers = [1, "dois", 3, 4, true, 6]
console.log(myNumbers);
var person1 = ["Lucas", 26];
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
