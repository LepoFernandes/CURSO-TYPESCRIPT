//AULA 1 - ARRAY
console.log("AULA 1");
console.log("");
var numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers[2]);
var names = ["Lucas", "Raquel"];
names.forEach((function (name) {
    console.log(name);
}));
//OUTRA SINTAXE DE ARRAY
var nums = [100, 200];
nums.push(500);
console.log(nums);
//AULA 2 - ANY 
console.log("");
console.log("AULA 2");
console.log("");
var arr1 = [1, "teste", true, [], { nome: "Lucas" }];
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
    var sallary = 1000;
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
var objCoord = { x: 329, y: 85.6 };
passCoordinates(objCoord);
//AULA 7 - PROPRIEDADES OPCIONAIS E VALIDANDO ARGUMENTOS
console.log("");
console.log("AULA 7");
console.log("");
function setName(fullname) {
    if (fullname.surname !== undefined) {
        return "Ola, ".concat(fullname.name, " ").concat(fullname.surname, ", tudo bem?");
    }
    else {
        return "Ola, ".concat(fullname.name, ", tudo bem?");
    }
}
var objName = { name: "Lucas", surname: "Fernandes" }; //COM SOBRENOME
var objName2 = { name: "Lucas" }; //SEM SOBRENOME
console.log(setName(objName));
console.log(setName(objName2));
//AULA 8 - UNION TYPE
console.log("");
console.log("AULA 8");
console.log("");
function showBalance(balance) {
    console.log("O saldo da conta e R$".concat(balance));
}
showBalance(100);
showBalance("500");
var arr2 = [1, "Teste", 5, true, false];
//AULA 9 - AVANCANDO EM UNION TYPE
console.log("");
console.log("AULA 9");
console.log("");
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuario nao aprovado!";
    }
    return "A funcao do usuario e: ".concat(role);
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
//AULA 10 - TYPE ALIAS
console.log("");
console.log("AULA 10");
console.log("");
function showId(id) {
    console.log("The ID is: ".concat(id));
}
showId(1);
showId("2");
//AULA 11 - INTERFACE
console.log("");
console.log("AULA 11");
console.log("");
function showCoords(obj) {
    console.log("X: ".concat(obj.x, " Y:").concat(obj.y, " Z:").concat(obj.z));
}
var coordObj = {
    x: 10,
    y: 15,
    z: 20
};
showCoords(coordObj);
