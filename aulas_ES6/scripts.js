
console.log("1 - var, let e const")
console.log("")

// 1 - var, let e const

var x = 10
var y = 15 

if (y > 10){
    var x = 5
    console.log(x)
}

console.log(x)

let a = 10
let b = 15

if (b > 10){
    let a = 5
    console.log(a)
}

console.log(a)

let i = 100

for (let i=0; i < 5; i++){
    console.log(i)
}

console.log(i)

const name = "Pedro"

function exibirNome(){
    const name = "Lucas";
    return console.log(name)
}

console.log(name)
exibirNome()

console.log("")
console.log("2 - Arrow Function")
console.log("")
// 2 - Arrow Function

const sum = function sum(a,b){
    return a + b
}

/* PODE SER ASSIM 
const arrowSum = (a,b) => {
    return a + b
}
MAS TAMBEM
*/

const arrowSum = (a,b) => a + b

console.log(sum(5,5))
console.log(arrowSum(5,5))

const greeting = (name) => {
    if(name){
        return "Ola, " + name 
    } 
    else {
        return "Ola"
    }
}


console.log(greeting("Lucas"))
console.log(greeting())

const testArrow = () => console.log("Test complete!")
testArrow()

const user = {
    name: "Theo",
    sayUserName(){
        var self = this
        setTimeout(function(){
            console.log(self)
            console.log("Username: " + self.name)
        }, 500)
    },

    sayUserNameArrow(){
        setTimeout(() => {
            console.log("Username: " + this.name)
        }, 700)
    }
}

//user.sayUserName()
//user.sayUserNameArrow()


console.log("")
console.log("3 - Filter Metod")
console.log("")
// 3 - Filter Metod

const arr = [1, 2, 3, 4, 5]

const highNumbers = arr.filter((n) => {
    if (n >= 3) {
        return n
    }
})

console.log(highNumbers)

const users = [
    {name : "Lucas", available: true},
    {name : "Mateus", available: false},
    {name : "Pedro", available: true},
    {name : "Marcos", available: false},
]

const availableUsers = users.filter((user) => user.available)

console.log(availableUsers)

const notAvailableUsers = users.filter((user) => !user.available)

console.log(notAvailableUsers)


console.log("")
console.log("4 - Map Metod")
console.log("")
// 4 - Map Metod


const products = [
    {name : "Camisa", price: 10.99, category:'Roupas'},
    {name : "Chaleira Eletrica", price: 49.99, category:'Eletro'},
    {name : "Computador", price: 599.99, category:'Eletronicos'},
    {name : "Headset", price: 59.99, category:'Eletronicos'},
]

products.map((product)=> {
    if (product.category == 'Eletronicos' ){
        product.onSale = true
    }
})


console.log(products)


//Essa arrow eu fiz sozinho aplica um desconto nos produtos q sao filtrados como onSale usando o map pra criar outro array


const productsOnSale = products.filter((products) => products.onSale == true)

const newOnSale = productsOnSale.map(product => ({
    ...product,
    price : product.price * 0.9 

}));

console.log(newOnSale)


console.log("")
console.log("5 - Templates Literals")
console.log("")
// 5 - Templates Literals

const userName = 'Lucas'
const age = 30

console.log(`O nome dele e ${userName} e ele tem ${age} anos.`)


console.log("")
console.log("6 - Destruturing")
console.log("")
// 6 - Destruturing

//COM ARRAY 

const fruits = ['Melancia', 'Laranja', 'Uva']

const [f1, f2, f3] = fruits

console.log(f1)
console.log(f2)
console.log(f3)

console.log("")
//COM OBJETOS


const productDetails = {
    name: "Mouse",
    price: 39.99,
    category: "Periféricos",
    color: "Cinza"
}

const {name: productName, price, category: productCategory, color} = productDetails

console.log(`O nome do produto é ${productName}, ele custa R$${price}, cor ${color} e categoria é ${productCategory}`)


console.log("")
console.log("7 - Spread Operator")
console.log("")
// 7 - Spread Operator

const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

const a3 = [...a1, ...a2]

console.log(a3)

const a4= [0, ...a1, 4]

console.log(a4)

const carName = {name: 'Gol'}
const carBrand = {brand: 'VW'}
const otherInfos = {km: 10050, price: 4999.00}

const car = {...carName, ...carBrand, ...otherInfos, wheels: 4}

console.log(car)