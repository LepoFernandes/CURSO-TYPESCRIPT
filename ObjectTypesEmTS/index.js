//AULA 1 - TIPO DE OBJETO PARA FUNCAO COM INTERFACE
console.log("");
console.log("AULA 1");
console.log("");
function showProductDetails(product) {
    console.log("O nome do produto \u00E9 ".concat(product.name, " e o preco: ").concat(product.price));
    if (product.isAvailable) {
        console.log("Produto disponivel.");
    }
    else {
        console.log("Produto nao esta disponivel.");
    }
}
var shirt = {
    name: "Camisa",
    price: 18.99,
    isAvailable: true
};
showProductDetails(shirt);
showProductDetails({ name: "Caneta", price: 0.99, isAvailable: false });
//AULA 2 - PARAMETROS OPCIONAIS NAS INTERFACES
console.log("");
console.log("AULA 2");
console.log("");
function showUserDetails(user) {
    if (user.email) {
        console.log("O usuario se chama: ".concat(user.name, " e tem email: ").concat(user.email));
    }
    else {
        console.log("Usuario se chama ".concat(user.name));
    }
}
var userA = {
    name: "Lucas",
    email: "lucasfgomes166@outlook.com"
};
var userB = {
    name: "Pedro"
};
showUserDetails(userA);
showUserDetails(userB);
//AULA 3- READONLY
console.log("");
console.log("AULA 3");
console.log("");
var fusca = {
    brand: "VolksWagen",
    wheels: 4
};
console.log(fusca);
