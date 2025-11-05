//AULA 1 - TYPEOF TYPE GUARD
console.log("")
console.log("AULA 1")
console.log("")

function sum(a: number | string, b: number | string){

    if( typeof a === "string" && typeof b === "string"){
        console.log(parseFloat(a) + parseFloat(b))
    } else if (typeof a === "number" && typeof b === "number"){
        console.log(a + b)
    } else{
         console.log("Nao e possivel calcular tipo string com tipo number")
    }
}
sum("4", "59")
sum(4, 42.9)
sum("5", 23)


//AULA 2 - CHECANDO SE OS VALORES EXISTEM
console.log("")
console.log("AULA 2")
console.log("")

function operations(arr: number[], operation?: string | undefined){
    if ( operation){
        if(operation === "sum"){
            const sum = arr.reduce((i, total) => i + total)
            console.log(sum)
        } else if(operation === "multiply"){
            const multiply = arr.reduce((i, total) => i * total)
            console.log(multiply)
        }
    } else {
        console.log("Defina um valor valido para operation")
    }
}

operations([1, 2, 3], "sum")
operations([1, 2, 7], "multiply")

//AULA 3 - OPERATOR INSTANCEOF
console.log("")
console.log("AULA 3")
console.log("")

class User{
    name
    constructor(name: string){
        this.name = name
    }
}

class superUser extends User{
    constructor(name: string){
        super(name)
    }
}

const jhon = new User("John")
const paul = new superUser("Paul")

console.log(jhon)
console.log(paul)

function userGreeting(user: object){
    if (user instanceof superUser){
        console.log("Welcome to the VIP group, " + user.name)
    } else if (user instanceof User){
        console.log("Welcome, " + user.name)
    }
}

userGreeting(jhon)
userGreeting(paul)


//AULA 4 - OPERATOR IN
console.log("")
console.log("AULA 4")
console.log("")

class Dog{
    name
    breed

    constructor(name: string , breed?: string){
        this.name = name
        if(breed){
            this.breed = breed
        }
    }
}

const turca = new Dog("Turca")
const bob = new Dog("Bob", "Pastor Alemao")

function showDogDetails(dog : Dog){

    if('breed' in dog){
        console.log(`The dog is a ${dog.breed}`)
    } else {
        console.log(`The do is a SRD`)
    }
}

showDogDetails(turca)
showDogDetails(bob)