//AULA - 1 = NUMBERS
console.log("AULA 1")
console.log(" ")

let x1: number = 10
console.log(x1)
console.log(typeof x1)


const y:number = 15.59826
console.log(y)
console.log(typeof y)

//AULA - 2 = STRING
console.log(" ")
console.log("AULA 2")
console.log(" ")

const firstName1 : string = "Lucas"
console.log(firstName1.toUpperCase())

let fullName: string 
const lastName1 : string = "Fernandes"

fullName = firstName1 + " " + lastName1

console.log(fullName)
console.log(typeof fullName)

//AULA - 3 = BOOLEAN
console.log(" ")
console.log("AULA 3")
console.log(" ")

let a: boolean = false

console.log(a)
console.log(typeof a)

a = true 

console.log(a)

//AULA - 4 = ANNOTATION OU INFERENEC
console.log(" ")
console.log("AULA 4")
console.log(" ")

const ann: string = "Teste"

let inf = "Teste"

//NOS DOIS CASOS ELE ENTENDEU QUE SAO STRINGS E NAO ACEITA Q TROQUE PRA NUMBER OU BOOLEAN


//NA PROXIMA AULA ENSINA A CONFIGURAR O ARQUIVO DO TS USANDO tsc --init 

console.log("testando")