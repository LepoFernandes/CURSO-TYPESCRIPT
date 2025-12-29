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
//AULA 8 - Heranca de interfaces
console.log("");
console.log("AULA 8 - HERANCA DE INTERFACES");
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
