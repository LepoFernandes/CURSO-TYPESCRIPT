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