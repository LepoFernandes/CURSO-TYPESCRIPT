//AULA 1 - TIPO DE OBJETO PARA FUNCAO COM INTERFACE
console.log("")
console.log("AULA 1")
console.log("")

interface Product{
    name: string
    price: number
    isAvailable: boolean
}

function showProductDetails(product: Product){
    console.log(`O nome do produto é ${product.name} e o preco: ${product.price}`)
    if(product.isAvailable){
        console.log("Produto disponivel.")
    }else{
        console.log(`Produto nao esta disponivel.`)
    }
}

const shirt: Product = {
    name: "Camisa",
    price: 18.99,
    isAvailable: true
}

showProductDetails(shirt)
showProductDetails({name: "Caneta", price:0.99, isAvailable: false})


//AULA 2 - PARAMETROS OPCIONAIS NAS INTERFACES
console.log("")
console.log("AULA 2")
console.log("")

interface User{
    name: string
    email?: string
}

function showUserDetails(user: User){
    if(user.email){
        console.log(`O usuario se chama: ${user.name} e tem email: ${user.email}`)
    }else{
        console.log(`Usuario se chama ${user.name}`)
    }
}


const userA: User = {
    name: "Lucas",
    email: "lucasfgomes166@outlook.com"
}

const userB: User = {
    name: "Pedro"
}

showUserDetails(userA)
showUserDetails(userB)

//AULA 3- READONLY
console.log("")
console.log("AULA 3")
console.log("")

interface Car{
    brand: string
    readonly wheels: number
}

const fusca: Car = {
    brand: "VolksWagen",
    wheels: 4
}

console.log(fusca)

//fusca.wheels = 5  NAO DEIXA ALTERAR

//AULA 4- INDEX SIGNATURE
console.log("")
console.log("AULA 4")
console.log("")

interface CoordObjects {
    [index: string] : number //PRECISA SEGUIR ESSA SINTAXE NAO ACEITARIA UM TIPO NUMBER RECEBENDO TIPO STRING POR EXEMPLO
}

let coords: CoordObjects = {
    x: 10
}

coords.y = 15

console.log(coords)

//AULA 5- EXTENDS TYPES
console.log("")
console.log("AULA 5")
console.log("")


interface Human{
    name: string
    age: number
}

interface superHuman extends Human{
    superPowers: "Force" | "Fire" | "Ice"
}

const human1: Human = {
    name: "Pedro",
    age: 26
}

const superHuman1: superHuman = {
    name: "Lucas",
    age: 26,
    superPowers: "Force"
}

const superHuman2: superHuman = {
    name: "Vitor",
    age: 26,
    superPowers: "Fire"
}

const superHuman3: superHuman = {
    name: "Paulo",
    age: 26,
    superPowers: "Ice"
}


console.log(human1)
console.log(superHuman1)
console.log(superHuman2)
console.log(superHuman3)



//AULA 6 - INTERSECTION TYPES
console.log("")
console.log("AULA 6")
console.log("")


interface Character{
    name: string
}

interface Gun {
    type: string
    caliber: number
}

type humanWithGun = Character & Gun

const arnold: humanWithGun = {
    name:"Arnold",
    type:"Shotgun",
    caliber:12
}

console.log(arnold)
console.log(arnold.caliber)

//AULA 7 - ReadOnlyArray
console.log("")
console.log("AULA 7")
console.log("")

let myArray: ReadonlyArray<string> = ["Laranja", "Banana", "Abacaxi"]

//myArray[3] = "Tomate"

console.log(myArray)

myArray.forEach((item) => {
    console.log("Fruta: " + item)
})

myArray.map((item) => {
    return `Fruta: ${item}`
})

console.log(myArray)


//AULA 8 - Tuplas
console.log("")
console.log("AULA 8")
console.log("")

type fiveNumbers = [number, number, number, number, number]

//number[]

const myNumbers: fiveNumbers = [1, 2, 3, 4, 5]

//const myNumber2: fiveNumbers = [1, 2, 3, 4, 5, 6]
//const myNumber3: fiveNumbers = [1, "dois", 3, 4, true, 6]

console.log(myNumbers)

type nameAndage = [string, number]

const person1 = ["Lucas", 26]

console.log(person1[0])
console.log(person1)



//AULA 9 - Tuplas com Readonly
console.log("")
console.log("AULA 9")
console.log("")


function showNumbers(number: readonly [number, number]){
    console.log(number[0])
    console.log(number[1])

}


showNumbers([1,2])