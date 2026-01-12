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
