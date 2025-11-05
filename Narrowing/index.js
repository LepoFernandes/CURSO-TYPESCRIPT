var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
            var sum_1 = arr.reduce(function (i, total) { return i + total; });
            console.log(sum_1);
        }
        else if (operation === "multiply") {
            var multiply = arr.reduce(function (i, total) { return i * total; });
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
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var superUser = /** @class */ (function (_super) {
    __extends(superUser, _super);
    function superUser(name) {
        return _super.call(this, name) || this;
    }
    return superUser;
}(User));
var jhon = new User("John");
var paul = new superUser("Paul");
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
var Dog = /** @class */ (function () {
    function Dog(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
    return Dog;
}());
var turca = new Dog("Turca");
var bob = new Dog("Bob", "Pastor Alemao");
function showDogDetails(dog) {
    if ('breed' in dog) {
        console.log("The dog is a ".concat(dog.breed));
    }
    else {
        console.log("The do is a SRD");
    }
}
showDogDetails(turca);
showDogDetails(bob);
