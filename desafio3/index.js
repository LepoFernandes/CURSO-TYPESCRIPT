function reviewUsers(user, stars, review) {
    if (typeof stars === "number" && typeof review === "boolean" && review) {
        console.log("User ".concat(user, " give ").concat(stars, " stars and leave a message"));
    }
    else if (typeof stars === "number" && !review) {
        console.log("User ".concat(user, " give ").concat(stars, " stars and not leave a message"));
    }
}
reviewUsers("Lucas", 3, true);
reviewUsers("Pedro", 4);
reviewUsers("Gabriel", 1, false);
reviewUsers("Henrique", 3, true);
//EXERCICIO 2 -- PEGUEI NO CHAT GPT
console.log("");
console.log("EXERCICIO 2");
console.log("");
function showID(id) {
    if (typeof id === "string") {
        console.log("O ID de texto \u00E9 ".concat(id));
    }
    else {
        console.log("O ID num\u00E9rico \u00E9 ".concat(id));
    }
}
showID(10);
showID("10");
//EXERCICIO 3 -- PEGUEI NO CHAT GPT
console.log("");
console.log("EXERCICIO 3");
console.log("");
function calculateTotal(price, discount) {
    if (typeof price === "string") {
        var value = Number(price);
        if (typeof discount === "boolean" && discount) {
            value = value - (value * 0.1);
            console.log("O valor era ".concat(price, " com desconto de 10% ficou : ").concat(value));
        }
        else if (typeof discount === "number") {
            value = value - (value * (discount / 100));
            console.log("O valor era ".concat(price, " com desconto ficou : ").concat(value));
        }
        else if (typeof discount === "boolean" && !discount) {
            console.log("Nenhum desconto aplicado, valor original : ".concat(price));
        }
    }
    else if (typeof price === "number") {
        var value = price;
        if (typeof discount === "boolean" && discount) {
            value = value - (value * 0.9);
            console.log("O valor era ".concat(price, " com desconto de 10% ficou : ").concat(value));
        }
        else if (typeof discount === "number") {
            value = value - (value * (discount / 100));
            console.log("O valor era ".concat(price, " com desconto ficou : ").concat(value));
        }
        else if (typeof discount === "boolean" && !discount) {
            console.log("Nenhum desconto aplicado, valor original : ".concat(price));
        }
    }
}
calculateTotal(59.9, 10);
calculateTotal("59.9", true);
calculateTotal(64, 20);
calculateTotal("59.9", false);
