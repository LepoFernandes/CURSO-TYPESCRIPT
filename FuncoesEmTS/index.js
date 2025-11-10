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
