"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//AULA 1 - TYPEOF TYPE GUARD
console.log("");
console.log("AULA 1");
console.log("");
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("Nao e possivel calcular tipo string com tipo number");
    }
}
sum("4", "59");
sum(4, 42.9);
sum("5", 23);
//AULA 2 - CHECANDO SE OS VALORES EXISTEM
console.log("");
console.log("AULA 2");
console.log("");
function operations(arr, operation) {
    if (operation) {
        if (operation === "sum") {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }
        else if (operation === "multiply") {
            const multiply = arr.reduce((i, total) => i * total);
            console.log(multiply);
        }
    }
    else {
        console.log("Defina um valor valido para operation");
    }
}
operations([1, 2, 3], "sum");
operations([1, 2, 7], "multiply");
//AULA 3 - OPERATOR INSTANCEOF
console.log("");
console.log("AULA 3");
console.log("");
class User {
    constructor(name) {
        this.name = name;
    }
}
class superUser extends User {
    constructor(name) {
        super(name);
    }
}
const jhon = new User("John");
const paul = new superUser("Paul");
console.log(jhon);
console.log(paul);
function userGreeting(user) {
    if (user instanceof superUser) {
        console.log("Welcome to the VIP group, " + user.name);
    }
    else if (user instanceof User) {
        console.log("Welcome, " + user.name);
    }
}
userGreeting(jhon);
userGreeting(paul);
//AULA 4 - OPERATOR IN
console.log("");
console.log("AULA 4");
console.log("");
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const turca = new Dog("Turca");
const bob = new Dog("Bob", "Pastor Alemao");
function showDogDetails(dog) {
    if ('breed' in dog) {
        console.log(`The dog is a ${dog.breed}`);
    }
    else {
        console.log(`The do is a SRD`);
    }
}
showDogDetails(turca);
showDogDetails(bob);
//# sourceMappingURL=index.js.map