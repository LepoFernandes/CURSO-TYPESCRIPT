//AULA 1 - revisao de generics
console.log("");
console.log("AULA 1 - GENERICS");
console.log("");
function showData(arg) {
    return "O dado sera: ".concat(arg);
}
console.log(showData(5));
console.log(showData("testando generic"));
console.log(showData(true));
console.log(showData(["teste", 5]));
//AULA 2 - revisao de constraint em generics
console.log("");
console.log("AULA 2 - CONSTRAINT EM GENERIC");
console.log("");
function showProductName(obj) {
    return "O nome do produto: ".concat(obj.name);
}
var product = { name: "Porta", cor: "Verde" };
var otherProduct = { name: "Carro", wheels: 4, cor: "Branco" };
console.log(showProductName(product));
console.log(showProductName(otherProduct));
//DESDE QUE TENHA NAME NESSE CASO QQR OBJETO SERA ACEITO POREM E OBRIGATORIO TEM NAME
//AULA 3 - revisao de interface com generics
console.log("");
console.log("AULA 3 - INTERFACE EM GENERIC");
console.log("");
var myCar = { name: "Fusca", wheels: 4, engine: 2.0, color: "Branco" };
var myPen = { name: "Caneta BIC", wheels: false, engine: false, color: "Azul" };
console.log(myCar);
console.log(myPen);
//AULA 4 - revisao de type parameters
console.log("");
console.log("AULA 4 - TYPE PARAMETERS");
console.log("");
function getSomeKey(obj, key) {
    return "A chave ".concat(String(key), " esta presente no objeto e tem valor de ").concat(String(obj[key]));
}
var server = {
    HD: '2TB',
    RAM: '32GB'
};
console.log(getSomeKey(server, 'RAM'));
//AULA 5 - keyof Type Operator
console.log("");
console.log("AULA 5 - keyof TYPE OPERATOR");
console.log("");
function showCharName(obj, key) {
    return "".concat(obj[key]);
}
var myChar = {
    name: "Lucas",
    age: 26,
    driveLicense: true
};
console.log(showCharName(myChar, 'name'));
//AULA 6 - typeof Type Operator
console.log("");
console.log("AULA 6 - typeof TYPE OPERATOR");
console.log("");
var userName = "Lucas";
var userName2 = "Lepo";
var userName3 = "Fernandes";
//AULA 7 - Indexed acess types
console.log("");
console.log("AULA 7 - INDEXED ACCESS TYPES");
console.log("");
var newTruck = {
    km: 10000,
    kg: 5000,
    description: "Caminhao pequeno porte"
};
function showKM(km) {
    console.log("O veiculo tem a km de : ".concat(km));
}
showKM(newTruck.km);
//AULA 8 - Conditional types
console.log("");
console.log("AULA 8 - CONDITIONAL TYPES");
console.log("");
var someVar = 5; //funciona ja que o B realmente tem extensao de A 
//AULA 9 - Template Literals
console.log("");
console.log("AULA 9 - TEMPLATE LITERALS TYPE");
console.log("");
var testing = "some text";
