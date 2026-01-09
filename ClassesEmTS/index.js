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
//AULA 1 - Campos em Classes
console.log("");
console.log("AULA 1 - CAMPOS EM CLASSES");
console.log("");
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var Lucas = new User();
Lucas.name = "Lucas";
Lucas.age = 26;
console.log(Lucas); //ESSA FORMA DE INICIAR SEM OS VALORES
//AULA 2 - Constructor em classes
console.log("");
console.log("AULA 2 - CONSTRUCTOR EM CLASSES");
console.log("");
var NewUser = /** @class */ (function () {
    function NewUser(name, age) {
        this.name = name;
        this.age = age;
    }
    return NewUser;
}());
var matheus = new NewUser("Matheus", 25);
console.log(matheus);
//AULA 3 - Campos readonly
console.log("");
console.log("AULA 3 - CAMPOS READONLY");
console.log("");
var Car = /** @class */ (function () {
    function Car(name) {
        this.wheels = 4;
        this.name = name;
    }
    return Car;
}());
var fusca = new Car("Fusca");
console.log(fusca);
//fusca.wheels = 5 --- NAO ALTERA POR SER READONLY
//AULA 4 - heranca e super
console.log("");
console.log("AULA 4 - HERANCA E SUPER");
console.log("");
var Machine = /** @class */ (function () {
    function Machine(name) {
        this.name = name;
    }
    return Machine;
}());
var KillerMachine = /** @class */ (function (_super) {
    __extends(KillerMachine, _super);
    function KillerMachine(name, guns) {
        var _this = _super.call(this, name) || this;
        _this.guns = guns;
        return _this;
    }
    return KillerMachine;
}(Machine));
var trator = new Machine("Trator");
console.log(trator);
var tratorMatador = new KillerMachine("Trator Matador", 4);
console.log(tratorMatador);
//AULA 5 - METODOS
console.log("");
console.log("AULA 5 - METODOS");
console.log("");
var Dwarf = /** @class */ (function () {
    function Dwarf(name) {
        this.name = name;
    }
    Dwarf.prototype.greeting = function () {
        console.log("Hello strange!");
    };
    return Dwarf;
}());
var jimmy = new Dwarf("Jimmy");
jimmy.greeting();
console.log(jimmy);
//AULA 6 - Palavra this
console.log("");
console.log("AULA 6 - THIS");
console.log("");
var Truck = /** @class */ (function () {
    function Truck(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    Truck.prototype.showDetails = function () {
        console.log("Caminhao do modelo: ".concat(this.model, ", que tem ").concat(this.hp, " cavalos de potencia"));
    };
    return Truck;
}());
var volvo = new Truck("Volvo", 400);
volvo.showDetails();
var scania = new Truck("Scania", 600);
scania.showDetails();
//AULA 7 - Getters
console.log("");
console.log("AULA 7 - GETTERS");
console.log("");
var Person = /** @class */ (function () {
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return this.name + " " + this.surname;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var lucasFernandes = new Person("Lucas", "Fernandes");
console.log(lucasFernandes);
console.log(lucasFernandes.fullName);
//AULA 8 - Setters
console.log("");
console.log("AULA 8 - SETTERS");
console.log("");
var Coords = /** @class */ (function () {
    function Coords() {
    }
    Object.defineProperty(Coords.prototype, "fillX", {
        set: function (x) {
            if (x === 0) {
                console.log("X sem sucesso!");
                return;
            }
            this.x = x;
            console.log("X inserido com sucesso!");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coords.prototype, "fillY", {
        set: function (y) {
            if (y === 0) {
                console.log("Y sem sucesso!");
                return;
            }
            this.y = y;
            console.log("Y inserido com sucesso!");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coords.prototype, "getCoords", {
        get: function () {
            return "X: ".concat(this.x, " e Y: ").concat(this.y);
        },
        enumerable: false,
        configurable: true
    });
    return Coords;
}());
var myCoords = new Coords();
myCoords.fillX = 15;
myCoords.fillY = 10;
console.log(myCoords);
console.log(myCoords.getCoords);
//AULA 9 - Heranca de interfaces
console.log("");
console.log("AULA 9 - HERANCA DE INTERFACES");
console.log("");
var blogPost = /** @class */ (function () {
    function blogPost(title) {
        this.title = title;
    }
    blogPost.prototype.itemTitle = function () {
        return "O titulo do post sera ".concat(this.title);
    };
    return blogPost;
}());
var myPost = new blogPost("Hello World");
console.log(myPost.itemTitle());
var TestingInterface = /** @class */ (function () {
    function TestingInterface(title) {
        this.title = title;
    }
    TestingInterface.prototype.itemTitle = function () {
        return "O titulo do post sera ".concat(this.title);
    };
    return TestingInterface;
}());
var myPost2 = new TestingInterface("Teste");
console.log(myPost2.itemTitle());
//AULA 10 - Override de metodos
console.log("");
console.log("AULA 10 - OVERRIDE DE METODOS");
console.log("");
var Base = /** @class */ (function () {
    function Base() {
    }
    Base.prototype.someMethod = function () {
        console.log("alguma coisa");
    };
    return Base;
}());
var Nova = /** @class */ (function (_super) {
    __extends(Nova, _super);
    function Nova() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Nova.prototype.someMethod = function () {
        console.log("testando outra coisa");
    };
    return Nova;
}(Base));
var myObject = new Base();
myObject.someMethod();
var myObject2 = new Nova();
myObject2.someMethod();
//AULA 11 - VISIBILIDADES
console.log("");
console.log("AULA 11 - PUBLIC");
console.log("");
var C = /** @class */ (function () {
    function C() {
        this.x = 10;
    }
    return C;
}());
var D = /** @class */ (function (_super) {
    __extends(D, _super);
    function D() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return D;
}(C));
var cInstance = new C();
console.log(cInstance.x);
var dInstance = new D();
console.log(dInstance.x);
console.log("");
console.log("AULA 12 - PROTECTED");
console.log("");
var E = /** @class */ (function () {
    function E() {
        this.x = 10;
    }
    E.prototype.newMethod = function () {
        console.log("teste metodo");
    };
    return E;
}());
var F = /** @class */ (function (_super) {
    __extends(F, _super);
    function F() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    F.prototype.showX = function () {
        console.log("X : " + this.x);
    };
    F.prototype.usingMethod = function () {
        this.newMethod();
    };
    return F;
}(E));
var fInstance = new F();
//console.log(fInstance.x) nao funciona sem o metodo
fInstance.showX();
fInstance.usingMethod();
console.log("");
console.log("AULA 13 - PRIVATE");
console.log("");
var PrivateClass = /** @class */ (function () {
    function PrivateClass() {
        this.name = "Private";
    }
    PrivateClass.prototype.showName = function () {
        console.log("Nome: " + this.name);
    };
    PrivateClass.prototype.privateMethod = function () {
        console.log("Metodo privado!");
    };
    PrivateClass.prototype.showPrivateMethod = function () {
        this.privateMethod();
    };
    return PrivateClass;
}());
var pObject = new PrivateClass();
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
var StaticMembers = /** @class */ (function () {
    function StaticMembers() {
        this.prop = "Teste static";
    }
    StaticMembers.prototype.staticMethod = function () {
        console.log("Testando com metodos");
    };
    return StaticMembers;
}());
// console.log(StaticMembers.prop) dessa forma da erro pois a prop nao pode ser acessada 
// StaticMembers.staticMethod()  mesmo erro 
var StaticMembers2 = /** @class */ (function () {
    function StaticMembers2() {
    }
    StaticMembers2.staticMethod2 = function () {
        console.log("Teste com jeito certo");
    };
    StaticMembers2.prop2 = "Teste correto";
    return StaticMembers2;
}());
console.log(StaticMembers2.prop2);
StaticMembers2.staticMethod2();
//AULA 15 - Generic Class
console.log("");
console.log("AULA 15 - GENERIC CLASS");
console.log("");
var Item = /** @class */ (function () {
    function Item(first, second) {
        this.first = first;
        this.second = second;
    }
    Object.defineProperty(Item.prototype, "showFirst", {
        get: function () {
            return "O first sera: ".concat(this.first);
        },
        enumerable: false,
        configurable: true
    });
    return Item;
}());
var newItem = new Item("caixa", "surpresa");
console.log(newItem);
console.log(newItem.showFirst);
console.log(typeof newItem.first);
var secondItem = new Item(3, true);
console.log(secondItem);
console.log(secondItem.showFirst);
console.log(typeof secondItem.first);
//AULA 16 - Parameters properties
console.log("");
console.log("AULA 16 - PARAMETERS PROPERTIES");
console.log("");
var ParametersClass = /** @class */ (function () {
    function ParametersClass(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    Object.defineProperty(ParametersClass.prototype, "showQty", {
        get: function () {
            return this.qty;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ParametersClass.prototype, "showPrice", {
        get: function () {
            return this.price;
        },
        enumerable: false,
        configurable: true
    });
    return ParametersClass;
}());
var newShirt = new ParametersClass("Camisa", 5, 19.99);
console.log(newShirt);
console.log(newShirt.name);
console.log(newShirt.showQty);
console.log(newShirt.showPrice); //sem os get nao daria pra acessar pois sao private
//AULA 17 - Class Expressions
console.log("");
console.log("AULA 17 - CLASS EXPRESSIONS");
console.log("");
var myClass = /** @class */ (function () {
    function class_1(name) {
        this.name = name;
    }
    return class_1;
}());
var pessoa = new myClass("Jones");
console.log(pessoa);
console.log(pessoa.name);
console.log(typeof pessoa.name);
//AULA 18 - Abstract class
console.log("");
console.log("AULA 18 - ABSTRACT CLASS");
console.log("");
var AbstractClass = /** @class */ (function () {
    function AbstractClass() {
    }
    return AbstractClass;
}());
// const newObj = new AbstractClass(); erro por ser abstract
var AbstractExample = /** @class */ (function (_super) {
    __extends(AbstractExample, _super);
    function AbstractExample(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    AbstractExample.prototype.showName = function () {
        console.log("Nome: " + this.name);
    };
    return AbstractExample;
}(AbstractClass));
var newObj = new AbstractExample("Lucas");
newObj.showName();
