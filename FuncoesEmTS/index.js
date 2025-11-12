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
//AULA 6 - PARAMETROS OPCIONAIS
console.log("");
console.log("AULA 6");
console.log("");
function apresentarPessoa(name, age, occupation) {
    if (age && occupation) {
        return console.log("Oi, meu nome \u00E9 ".concat(name, "! Tenho ").concat(age, " anos e sou ").concat(occupation, " "));
    }
    else if (age) {
        occupation = "desempregado";
        return console.log("Oi, meu nome \u00E9 ".concat(name, "! Tenho ").concat(age, " anos e sou ").concat(occupation, " "));
    }
    else if (occupation) {
        return console.log("Oi, meu nome \u00E9 ".concat(name, "! E sou ").concat(occupation, " "));
    }
    else {
        return console.log("Oi, meu nome \u00E9 ".concat(name, "! "));
    }
}
apresentarPessoa("Lucas", 26, "Programador");
apresentarPessoa("Lucas", undefined, "Programador");
apresentarPessoa("Lucas");
apresentarPessoa("Lucas", 26);
//AULA 7 - PARAMETRO DEFAULT (EXEMPLO MAIS EXTENSO PEGUEI DO CHAT GPT MAS DA PRA REFINAR)
console.log("");
console.log("AULA 7");
console.log("");
function calcularPagamento(valorBase, metodo, parcelas) {
    if (metodo === void 0) { metodo = "dinheiro"; }
    if (metodo === "dinheiro" || metodo === "pix") {
        var valorAlterado = valorBase;
        valorAlterado = valorBase - (valorBase * 0.1);
        return console.log("Pagamento feito em dinheiro ou pix no valor de ".concat(valorAlterado.toFixed(2)));
    }
    else if (metodo === "cartao") {
        if (parcelas === 1) {
            return console.log("Pagamento feito no cartao em 1x de ".concat(valorBase.toFixed(2)));
        }
        else if (parcelas) {
            if (parcelas > 1 && parcelas < 6) {
                var valorAlterado = valorBase + (valorBase * 0.05);
                valorAlterado = valorAlterado / parcelas;
                return console.log("Pagamento feito no cartao em ".concat(parcelas, " de ").concat(valorAlterado.toFixed(2)));
            }
            else if (parcelas >= 7) {
                var valorAlterado = valorBase + (valorBase * 0.10);
                valorAlterado = valorAlterado / parcelas;
                return console.log("Pagamento feito no cartao em ".concat(parcelas, " de ").concat(valorAlterado.toFixed(2)));
            }
        }
    }
}
calcularPagamento(100);
calcularPagamento(100, "cartao", 3);
calcularPagamento(100, "cartao", 12);
//LEMBRAR SEMPRE DE TRATAR O MAIS DIFICIL OU EXTENSO PRIMEIRO Q DAI SOBRA O MAIS SIMPLES PRA UM UNICO ELSE
//NAO FIZ ISSO NO CASO DE CIMA MAS PODERIA
//AULA 8 - UNKOWN
console.log("");
console.log("AULA 8");
console.log("");
function doSomething(x) {
    //console.log(x[0])
}
doSomething([1, 2, 3]); //ESSE CASO NAO FUNCIONA PQ NAO TEM UMA VALIDACAO SE O X REALMENTE E ARRAY
function doSomethingReal(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
}
doSomethingReal([1, 2, 3]);
//AULA 9 - NEVER
console.log("");
console.log("AULA 9");
console.log("");
function showErrorMessage(msg) {
    throw new Error(msg);
}
//showErrorMessage("Algum erro!")
