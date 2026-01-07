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


//AULA 7 - Getters
console.log("")
console.log("AULA 7 - GETTERS")
console.log("")


class Person{
    name
    surname

    constructor(name: string, surname: string){
        this.name = name
        this.surname = surname
    }

    get fullName(){
        return this.name + " " + this.surname
    }
}


const lucasFernandes = new Person("Lucas", "Fernandes")

console.log(lucasFernandes)

console.log(lucasFernandes.fullName)


//AULA 8 - Setters
console.log("")
console.log("AULA 8 - SETTERS")
console.log("")


class Coords {
    x! : number
    y! : number

    set fillX(x : number){
        if (x === 0 ){
            console.log("X sem sucesso!")
            return
        }
        this.x = x

        console.log("X inserido com sucesso!")
    }

    set fillY(y : number){
        if (y === 0 ){
            console.log("Y sem sucesso!")
            return
        }
        this.y = y

        console.log("Y inserido com sucesso!")
    }

    get getCoords(){
        return `X: ${this.x} e Y: ${this.y}`
    }
}

const myCoords = new Coords()

myCoords.fillX = 15
myCoords.fillY = 10

console.log(myCoords)

console.log(myCoords.getCoords)


//AULA 9 - Heranca de interfaces
console.log("")
console.log("AULA 9 - HERANCA DE INTERFACES")
console.log("")

interface showTitle {
    itemTitle(): string
}

class blogPost implements showTitle {
    title 

    constructor(title : string ){
        this.title = title
    }

    itemTitle(){
        return `O titulo do post sera ${this.title}`
    }
}

const myPost = new blogPost("Hello World")

console.log(myPost.itemTitle())

class TestingInterface implements showTitle{
    title 

    constructor(title : string ){
        this.title = title
    }

    itemTitle(){
        return `O titulo do post sera ${this.title}`
    }
}


const myPost2 = new TestingInterface("Teste")
console.log(myPost2.itemTitle())


//AULA 10 - Override de metodos
console.log("")
console.log("AULA 10 - OVERRIDE DE METODOS")
console.log("")


class Base {
    someMethod(){
        console.log("alguma coisa")
    }
}


class Nova extends Base {
    someMethod(){
        console.log("testando outra coisa")
    }
}

const myObject = new Base()

myObject.someMethod()

const myObject2 = new Nova()

myObject2.someMethod()


//AULA 11 - VISIBILIDADES
console.log("")
console.log("AULA 11 - PUBLIC")
console.log("")

class C {
    x = 10
}

class D extends C {

}

const cInstance = new C()

console.log(cInstance.x)

const dInstance = new D()

console.log(dInstance.x)


console.log("")
console.log("AULA 12 - PROTECTED")
console.log("")

class E {
    protected x = 10
    protected newMethod(){
        console.log("teste metodo")
    }
}

class F extends E {
    showX(){
        console.log("X : " + this.x)
    }

    usingMethod(){
       this.newMethod()
    }
}

const fInstance = new F()

//console.log(fInstance.x) nao funciona sem o metodo

fInstance.showX()
fInstance.usingMethod()



console.log("")
console.log("AULA 13 - PRIVATE")
console.log("")


class PrivateClass{
    private name = "Private"

    showName(){
        console.log("Nome: " + this.name)
    }

    private privateMethod(){
        console.log("Metodo privado!")
    }

    showPrivateMethod(){
        this.privateMethod()
    }
}

const pObject = new PrivateClass()

//console.log(pObject.name) tbm nao funciona sem o metodo

pObject.showName()

//pObject.privateMethod() tbm nao funciona sem metodo

pObject.showPrivateMethod()


//class TestingPrivate extends PrivateClass{
//    myMethod(){
  //      this.privateMethod()
    //}
//}  NAO PODE ACESSAR O METODO DA CLASSE MAE PELAS CLASSES FILHAS