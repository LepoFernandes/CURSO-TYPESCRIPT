//EXERCICIO DO CHAT GPT
function printUser(user) {
    var message = "User ".concat(user.id, " with the name ").concat(user.name);
    if (user.email) {
        message += ", email ".concat(user.email);
    }
    if (user.age) {
        message += ", ".concat(user.age, " years ");
    }
    message += "in the role of ".concat(user.role);
    console.log(message);
}
var userA = {
    id: 89,
    name: "Lucas Fernandes",
    age: 26,
    email: "lucasgomes@email.com",
    role: "admin"
};
var userB = {
    id: 57,
    name: "Raquel Freitas",
    age: 25,
    role: "user"
};
var userC = {
    id: 77,
    name: "Murilo Fernandes",
    role: "user"
};
var userD = {
    id: 82,
    name: "Luisa Fontoura",
    email: "luisa@email.com",
    role: "guest"
};
printUser(userA);
printUser(userB);
printUser(userC);
printUser(userD);
