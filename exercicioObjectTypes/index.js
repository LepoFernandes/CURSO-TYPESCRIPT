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
console.log("NOVO EXERCICIO");
console.log("NOVO EXERCICIO");
console.log("NOVO EXERCICIO");
function showUserConfig(user) {
    console.log("");
    console.log("User config: ");
    for (var index in user.config) {
        console.log("".concat(index, ": ").concat(user.config[index]));
    }
}
var user1 = {
    config: {
        id: 10,
        username: "Lucas",
        darkMode: true,
        theme: "blue"
    }
};
var user2 = {
    config: {
        id: 17,
        username: "Vitor",
        notifications: false,
        volume: 15
    }
};
var user3 = {
    config: {
        id: 529,
        username: "Pedro",
        language: "Portuguese",
        theme: "pink"
    }
};
var user4 = {
    config: {
        id: 485,
        username: "Murilo"
    }
};
showUserConfig(user1);
showUserConfig(user2);
showUserConfig(user3);
showUserConfig(user4);
console.log("NOVO EXERCICIO");
console.log("NOVO EXERCICIO");
console.log("NOVO EXERCICIO");
function printUserInfo(user) {
    console.log("");
    console.log("Users info:");
    for (var item in user) {
        console.log("".concat(item, ": ").concat(user[item]));
    }
}
var admin = {
    id: 1,
    name: "Lucas",
    permissions: true,
    deleteUsers: true
};
var regular = {
    id: 2,
    name: "Raquel",
    subscriptionType: "premium",
    postsCreated: 42,
    profileComplete: true
};
var guest = {
    id: 3,
    name: "Murilo",
    temporary: true,
    expiresAt: "2025-12-01",
    acessLimited: true
};
printUserInfo(admin);
printUserInfo(regular);
printUserInfo(guest);
