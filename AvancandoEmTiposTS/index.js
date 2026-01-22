"use strict";
//AULA 1 - ARRAY
console.log("AULA 1");
console.log("");
let numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers[2]);
const names = ["Lucas", "Raquel"];
names.forEach((name => {
    console.log(name);
}));
//OUTRA SINTAXE DE ARRAY
const nums = [100, 200];
nums.push(500);
console.log(nums);
//AULA 2 - ANY 
console.log("");
console.log("AULA 2");
console.log("");
const arr1 = [1, "teste", true, [], { nome: "Lucas" }];
console.log(arr1);
arr1.push([1, 2, 3]);
console.log(arr1);
//AULA 3 - PARAMETRO TIPADOS
console.log("");
console.log("AULA 3");
console.log("");
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
//AULA 4 - TIPO DE RETORNO
console.log("");
console.log("AULA 4");
console.log("");
function mySum(a, b) {
    return a + b;
}
console.log(mySum(5, 8));
//AULA 5 - FUNCOES ANONIMAS
console.log("");
console.log("AULA 5");
console.log("");
setTimeout(function () {
    const sallary = 1000;
    //console.log(parseFloat(sallary))
    //console.log(sallary)
}, 2000);
//AULA 6 - TIPOS DE OBJETO
console.log("");
console.log("AULA 6");
console.log("");
function passCoordinates(coord) {
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
}
const objCoord = { x: 329, y: 85.6 };
passCoordinates(objCoord);
//AULA 7 - PROPRIEDADES OPCIONAIS E VALIDANDO ARGUMENTOS
console.log("");
console.log("AULA 7");
console.log("");
function setName(fullname) {
    if (fullname.surname !== undefined) {
        return `Ola, ${fullname.name} ${fullname.surname}, tudo bem?`;
    }
    else {
        return `Ola, ${fullname.name}, tudo bem?`;
    }
}
const objName = { name: "Lucas", surname: "Fernandes" }; //COM SOBRENOME
const objName2 = { name: "Lucas" }; //SEM SOBRENOME
console.log(setName(objName));
console.log(setName(objName2));
//AULA 8 - UNION TYPE
console.log("");
console.log("AULA 8");
console.log("");
function showBalance(balance) {
    console.log(`O saldo da conta e R$${balance}`);
}
showBalance(100);
showBalance("500");
const arr2 = [1, "Teste", 5, true, false];
//AULA 9 - AVANCANDO EM UNION TYPE
console.log("");
console.log("AULA 9");
console.log("");
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuario nao aprovado!";
    }
    return `A funcao do usuario e: ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
//AULA 10 - TYPE ALIAS
console.log("");
console.log("AULA 10");
console.log("");
function showId(id) {
    console.log(`The ID is: ${id}`);
}
showId(1);
showId("2");
//AULA 11 - INTERFACE
console.log("");
console.log("AULA 11");
console.log("");
function showCoords(obj) {
    console.log(`X: ${obj.x} Y:${obj.y} Z:${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 15,
    z: 20
};
showCoords(coordObj);
//AULA 12 - INTERFACE X TYPE ALIAS
console.log("");
console.log("AULA 12");
console.log("");
const somePerson = { name: "Lucas", age: 26 };
console.log(somePerson); //DA PRA IMPLEMENTAR MAIS DADOS JA NO TYPE NAO PQ DARIA ERRO 
//type personType = {age: number}
//AULA 13 - LITERAL TYPES
console.log("");
console.log("AULA 13");
console.log("");
let test;
test = "testando";
console.log(test);
function showDirection(direction) {
    console.log(`A direcao sera: ${direction}`);
}
showDirection("center");
//AULA 14 - NON-NULL ASSERTATION OPERATORS
console.log("");
console.log("AULA 14");
console.log("");
const p = document.getElementById("some-p");
console.log(p.innerText);
//AULA 15 - BIGINT
console.log("");
console.log("AULA 15");
console.log("");
let n;
n = 1000n;
console.log(n);
//AULA 16 - SYMBOL
console.log("");
console.log("AULA 16");
console.log("");
let symbolA = Symbol("a");
let symbolB = Symbol("a");
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
