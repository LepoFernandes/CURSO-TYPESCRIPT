var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//AULA 1 - VOID
console.log("");
console.log("AULA 1");
console.log("");
function withoutReturn() {
    console.log("Funcao sem retorno");
}
withoutReturn(); //MUITO UTILIZADA EM FUNCOES QUE MEXEM COM O DOM
//AULA 2 - CALLBACK COMO ARGUMENTO
console.log("");
console.log("AULA 2");
console.log("");
function greeting(name) {
    return "Hello ".concat(name);
}
function preGreeting(f, username) {
    console.log("Preparando a funcao");
    var greet = f(username);
    console.log(greet);
}
preGreeting(greeting, "Matheus");
//AULA 3 - GENERIC FUNCTION
console.log("");
console.log("AULA 3");
console.log("");
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["A", "B", "C"]));
console.log(firstElement([true, false, true]));
function mergeObjects(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var newObject = mergeObjects({ name: "Matheus" }, { age: 30, job: "Programmer" });
console.log(newObject);
//AULA 4 - CONSTRAINTS
console.log("");
console.log("AULA 4");
console.log("");
function biggestNumber(a, b) {
    var biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 3));
console.log(biggestNumber("51", "37"));
//AULA 5 - ESPECIFICA TIPO DE ARGUMENTOS
console.log("");
console.log("AULA 5");
console.log("");
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [5, 6, 7]));
console.log(mergeArrays([1, 2, 3], ["5", "6", "7"]));
