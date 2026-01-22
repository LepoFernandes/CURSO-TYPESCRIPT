"use strict";
//AULA 1 - Campos em Classes
console.log("");
console.log("AULA 1 - CAMPOS EM CLASSES");
console.log("");
class User {
}
const Lucas = new User();
Lucas.name = "Lucas";
Lucas.age = 26;
console.log(Lucas); //ESSA FORMA DE INICIAR SEM OS VALORES
//AULA 2 - Constructor em classes
console.log("");
console.log("AULA 2 - CONSTRUCTOR EM CLASSES");
console.log("");
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const matheus = new NewUser("Matheus", 25);
console.log(matheus);
//AULA 3 - Campos readonly
console.log("");
console.log("AULA 3 - CAMPOS READONLY");
console.log("");
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const fusca = new Car("Fusca");
console.log(fusca);
//fusca.wheels = 5 --- NAO ALTERA POR SER READONLY
//AULA 4 - heranca e super
console.log("");
console.log("AULA 4 - HERANCA E SUPER");
console.log("");
class Machine {
    constructor(name) {
        this.name = name;
    }
}
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const trator = new Machine("Trator");
console.log(trator);
const tratorMatador = new KillerMachine("Trator Matador", 4);
console.log(tratorMatador);
//AULA 5 - METODOS
console.log("");
console.log("AULA 5 - METODOS");
console.log("");
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log("Hello strange!");
    }
}
const jimmy = new Dwarf("Jimmy");
jimmy.greeting();
console.log(jimmy);
//AULA 6 - Palavra this
console.log("");
console.log("AULA 6 - THIS");
console.log("");
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhao do modelo: ${this.model}, que tem ${this.hp} cavalos de potencia`);
    }
}
const volvo = new Truck("Volvo", 400);
volvo.showDetails();
const scania = new Truck("Scania", 600);
scania.showDetails();
//AULA 7 - Getters
console.log("");
console.log("AULA 7 - GETTERS");
console.log("");
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return this.name + " " + this.surname;
    }
}
const lucasFernandes = new Person("Lucas", "Fernandes");
console.log(lucasFernandes);
console.log(lucasFernandes.fullName);
//AULA 8 - Setters
console.log("");
console.log("AULA 8 - SETTERS");
console.log("");
class Coords {
    set fillX(x) {
        if (x === 0) {
            console.log("X sem sucesso!");
            return;
        }
        this.x = x;
        console.log("X inserido com sucesso!");
    }
    set fillY(y) {
        if (y === 0) {
            console.log("Y sem sucesso!");
            return;
        }
        this.y = y;
        console.log("Y inserido com sucesso!");
    }
    get getCoords() {
        return `X: ${this.x} e Y: ${this.y}`;
    }
}
const myCoords = new Coords();
myCoords.fillX = 15;
myCoords.fillY = 10;
console.log(myCoords);
console.log(myCoords.getCoords);
//AULA 9 - Heranca de interfaces
console.log("");
console.log("AULA 9 - HERANCA DE INTERFACES");
console.log("");
class blogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O titulo do post sera ${this.title}`;
    }
}
const myPost = new blogPost("Hello World");
console.log(myPost.itemTitle());
class TestingInterface {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O titulo do post sera ${this.title}`;
    }
}
const myPost2 = new TestingInterface("Teste");
console.log(myPost2.itemTitle());
//AULA 10 - Override de metodos
console.log("");
console.log("AULA 10 - OVERRIDE DE METODOS");
console.log("");
class Base {
    someMethod() {
        console.log("alguma coisa");
    }
}
class Nova extends Base {
    someMethod() {
        console.log("testando outra coisa");
    }
}
const myObject = new Base();
myObject.someMethod();
const myObject2 = new Nova();
myObject2.someMethod();
//AULA 11 - VISIBILIDADES
console.log("");
console.log("AULA 11 - PUBLIC");
console.log("");
class C {
    constructor() {
        this.x = 10;
    }
}
class D extends C {
}
const cInstance = new C();
console.log(cInstance.x);
const dInstance = new D();
console.log(dInstance.x);
console.log("");
console.log("AULA 12 - PROTECTED");
console.log("");
class E {
    constructor() {
        this.x = 10;
    }
    newMethod() {
        console.log("teste metodo");
    }
}
class F extends E {
    showX() {
        console.log("X : " + this.x);
    }
    usingMethod() {
        this.newMethod();
    }
}
const fInstance = new F();
//console.log(fInstance.x) nao funciona sem o metodo
fInstance.showX();
fInstance.usingMethod();
console.log("");
console.log("AULA 13 - PRIVATE");
console.log("");
class PrivateClass {
    constructor() {
        this.name = "Private";
    }
    showName() {
        console.log("Nome: " + this.name);
    }
    privateMethod() {
        console.log("Metodo privado!");
    }
    showPrivateMethod() {
        this.privateMethod();
    }
}
const pObject = new PrivateClass();
//console.log(pObject.name) tbm nao funciona sem o metodo
pObject.showName();
//pObject.privateMethod() tbm nao funciona sem metodo
pObject.showPrivateMethod();
//class TestingPrivate extends PrivateClass{
//    myMethod(){
//      this.privateMethod()
//}
//}  NAO PODE ACESSAR O METODO DA CLASSE MAE PELAS CLASSES FILHAS
//AULA 14 - Static members
console.log("");
console.log("AULA 14 - STATIC MEMBERS");
console.log("");
class StaticMembers {
    constructor() {
        this.prop = "Teste static";
    }
    staticMethod() {
        console.log("Testando com metodos");
    }
}
// console.log(StaticMembers.prop) dessa forma da erro pois a prop nao pode ser acessada 
// StaticMembers.staticMethod()  mesmo erro 
class StaticMembers2 {
    static staticMethod2() {
        console.log("Teste com jeito certo");
    }
}
StaticMembers2.prop2 = "Teste correto";
console.log(StaticMembers2.prop2);
StaticMembers2.staticMethod2();
//AULA 15 - Generic Class
console.log("");
console.log("AULA 15 - GENERIC CLASS");
console.log("");
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showFirst() {
        return `O first sera: ${this.first}`;
    }
}
const newItem = new Item("caixa", "surpresa");
console.log(newItem);
console.log(newItem.showFirst);
console.log(typeof newItem.first);
const secondItem = new Item(3, true);
console.log(secondItem);
console.log(secondItem.showFirst);
console.log(typeof secondItem.first);
//AULA 16 - Parameters properties
console.log("");
console.log("AULA 16 - PARAMETERS PROPERTIES");
console.log("");
class ParametersClass {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showQty() {
        return this.qty;
    }
    get showPrice() {
        return this.price;
    }
}
const newShirt = new ParametersClass("Camisa", 5, 19.99);
console.log(newShirt);
console.log(newShirt.name);
console.log(newShirt.showQty);
console.log(newShirt.showPrice); //sem os get nao daria pra acessar pois sao private
//AULA 17 - Class Expressions
console.log("");
console.log("AULA 17 - CLASS EXPRESSIONS");
console.log("");
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new myClass("Jones");
console.log(pessoa);
console.log(pessoa.name);
console.log(typeof pessoa.name);
//AULA 18 - Abstract class
console.log("");
console.log("AULA 18 - ABSTRACT CLASS");
console.log("");
class AbstractClass {
}
// const newObj = new AbstractClass(); erro por ser abstract
class AbstractExample extends AbstractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log("Nome: " + this.name);
    }
}
const newObj = new AbstractExample("Lucas");
newObj.showName();
