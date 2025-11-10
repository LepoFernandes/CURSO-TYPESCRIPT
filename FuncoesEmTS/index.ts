//AULA 1 - VOID
console.log("")
console.log("AULA 1")
console.log("")

function withoutReturn(): void{
    console.log("Funcao sem retorno")
}

withoutReturn() //MUITO UTILIZADA EM FUNCOES QUE MEXEM COM O DOM


//AULA 2 - CALLBACK COMO ARGUMENTO
console.log("")
console.log("AULA 2")
console.log("")

function greeting(name: string){
    return `Hello ${name}`
}

function preGreeting(f: (name: string) => string, username: string){
    console.log("Preparando a funcao")

    const greet = f(username)

    console.log(greet)
}

preGreeting(greeting, "Matheus")