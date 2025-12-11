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
