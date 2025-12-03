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
