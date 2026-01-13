// 1 - IMPORTACAO DE ARQUIVOS

import importGreet from "./greet";

importGreet();

// 2 - IMPORTACAO DE VARIAVEIS

import {x} from "./variable"
console.log(x);


//3 - MULTIPLAS IMPORTACOES

import {a,b,myFunction} from './multiple'

console.log(a)
console.log(b)
myFunction();

// 4 - ALIAS

import {someName as name} from "./changename"

console.log(name)

// 5 - IMPORTANDO DIVERSOS ITENS

import * as myNumbers from "./numbers"  //PRECISA DE UM ALIAS "AS" PRA FUNCIONAR

console.log(myNumbers)

// 6 - IMPORTANDO TIPOS 

import {Human} from "./mytype"

class User implements Human {
    name 
    age

    constructor (name: string, age: number){
        this.name = name
        this.age = age
    }
}

const joao = new User("joao", 25)
console.log(joao)