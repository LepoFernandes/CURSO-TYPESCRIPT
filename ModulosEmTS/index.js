"use strict";
// 1 - IMPORTACAO DE ARQUIVOS
Object.defineProperty(exports, "__esModule", { value: true });
var greet_1 = require("./greet");
(0, greet_1.default)();
// 2 - IMPORTACAO DE VARIAVEIS
var variable_1 = require("./variable");
console.log(variable_1.x);
//3 - MULTIPLAS IMPORTACOES
var multiple_1 = require("./multiple");
console.log(multiple_1.a);
console.log(multiple_1.b);
(0, multiple_1.myFunction)();
// 4 - ALIAS
var changename_1 = require("./changename");
console.log(changename_1.someName);
// 5 - IMPORTANDO DIVERSOS ITENS
var myNumbers = require("./numbers"); //PRECISA DE UM ALIAS "AS" PRA FUNCIONAR
console.log(myNumbers);
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
var joao = new User("joao", 25);
console.log(joao);
