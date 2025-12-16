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

//AULA 4 - heranca e super
console.log("")
console.log("AULA 4 - HERANCA E SUPER")
console.log("")

class Machine{
    name

    constructor(name: string){
        this.name = name
    }
}

class KillerMachine extends Machine{
    guns

    constructor(name: string, guns: number){
        super(name)
        this.guns = guns
    }
}


const trator = new Machine("Trator")
console.log(trator)

const tratorMatador = new KillerMachine("Trator Matador", 4)
console.log(tratorMatador)


//AULA 5 - METODOS
console.log("")
console.log("AULA 5 - METODOS")
console.log("")

class Dwarf {
    name

    constructor(name: string){
        this.name = name
    }

    greeting(){
        console.log("Hello strange!")
    }
}

const jimmy = new Dwarf("Jimmy")

jimmy.greeting()
console.log(jimmy)


//AULA 6 - Palavra this
console.log("")
console.log("AULA 6 - THIS")
console.log("")

class Truck{
    model
    hp

    constructor(model: string, hp: number){
        this.model = model
        this.hp = hp
    }

    showDetails(){
        console.log(`Caminhao do modelo: ${this.model}, que tem ${this.hp} cavalos de potencia`)
    }
}

const volvo = new Truck("Volvo", 400)
volvo.showDetails()

const scania = new Truck("Scania", 600)
scania.showDetails()