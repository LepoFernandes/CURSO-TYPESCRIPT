//AULA 1 - Campos em Classes
console.log("")
console.log("AULA 1 - CAMPOS EM CLASSES")
console.log("")

class User {
    name!: string
    age!: number
}

const Lucas = new User()

Lucas.name = "Lucas"
Lucas.age = 26

console.log(Lucas) //ESSA FORMA DE INICIAR SEM OS VALORES


//AULA 2 - Constructor em classes
console.log("")
console.log("AULA 2 - CONSTRUCTOR EM CLASSES")
console.log("")

class NewUser {
    name
    age

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }
}

const matheus = new NewUser("Matheus", 25)

console.log(matheus)


//AULA 3 - Campos readonly
console.log("")
console.log("AULA 3 - CAMPOS READONLY")
console.log("")


class Car {
    name
    readonly wheels = 4

    constructor (name: string){
        this.name = name
    }
}

const fusca = new Car("Fusca")

console.log(fusca)

//fusca.wheels = 5 --- NAO ALTERA POR SER READONLY