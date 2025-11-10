//EXERCICIO 1
function showProductDetails(name, price) {
    console.log("The ".concat(name, " costs ").concat(price.toFixed(2)));
}
showProductDetails("chicken", 30);
showProductDetails("computer", 3000);
showProductDetails("pasta", 29.9);
console.log("");
//EXERCICIO 2
console.log("");
function functionCall(name) {
    return "Hello ".concat(name);
}
function processUser(f, user) {
    console.log("User in process");
    var process = f(user);
    console.log(process);
}
processUser(functionCall, "Lucas");
console.log("");
//EXERCICIO 3
console.log("");
function showItems(arr) {
    arr.forEach(function (element) {
        console.log(element);
    });
}
showItems(["Casa", "Carro", "Moto"]);
showItems([1, 2, 3, 4]);
showItems([false, true]);
