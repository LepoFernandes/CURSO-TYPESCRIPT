//AULA 1 - ARRAY
console.log("AULA 1")
console.log("")

let numbers: number[] = [1, 2, 3, 4, 5]
numbers.push(6)

console.log(numbers[2])

const names: string[] = ["Lucas", "Raquel"]

names.forEach((name =>{
    console.log(name)
}))

//OUTRA SINTAXE DE ARRAY

const nums: Array<number> = [100, 200]

nums.push(500)

console.log(nums)

//AULA 2 - ANY 
console.log("")
console.log("AULA 2")
console.log("")

const arr1: any[] = [1, "teste", true, [], {nome: "Lucas"}]

console.log(arr1)

arr1.push([1, 2, 3])

console.log(arr1)


//AULA 3 - PARAMETRO TIPADOS
console.log("")
console.log("AULA 3")
console.log("")

function soma(a: number,b: number){
    console.log(a + b)
}
soma (4,5)

//AULA 4 - TIPO DE RETORNO
console.log("")
console.log("AULA 4")
console.log("")

function mySum(a: number, b: number): number{
    return a + b
}

console.log(mySum(5,8))

//AULA 5 - FUNCOES ANONIMAS
console.log("")
console.log("AULA 5")
console.log("")

setTimeout(function(){

    const sallary: number = 1000

    //console.log(parseFloat(sallary))

    //console.log(sallary)
}, 2000)

//AULA 6 - TIPOS DE OBJETO
console.log("")
console.log("AULA 6")
console.log("")

function passCoordinates(coord: {x: number, y: number}){
    console.log("X coordinates: " + coord.x)
    console.log("Y coordinates: " + coord.y)
}

const objCoord = {x: 329, y: 85.6}

passCoordinates(objCoord)

//AULA 7 - PROPRIEDADES OPCIONAIS E VALIDANDO ARGUMENTOS
console.log("")
console.log("AULA 7")
console.log("")

function setName(fullname: {name: string, surname?:string}){
    if (fullname.surname !== undefined){
        return `Ola, ${fullname.name} ${fullname.surname}, tudo bem?`
    } else {
        return `Ola, ${fullname.name}, tudo bem?`
    } 
}

const objName = {name: "Lucas", surname: "Fernandes"} //COM SOBRENOME
const objName2 = {name: "Lucas"} //SEM SOBRENOME

console.log(setName(objName))
console.log(setName(objName2))

//AULA 8 - UNION TYPE
console.log("")
console.log("AULA 8")
console.log("")

function showBalance(balance: string | number){
    console.log(`O saldo da conta e R$${balance}`)
}

showBalance(100)
showBalance("500")

const arr2: Array<number | string | boolean> = [1, "Teste", 5, true, false]

//AULA 9 - AVANCANDO EM UNION TYPE
console.log("")
console.log("AULA 9")
console.log("")

function showUserRole(role: boolean | string){
    if(typeof role === "boolean"){
        return "Usuario nao aprovado!"
    }
    return `A funcao do usuario e: ${role}`
}

console.log(showUserRole(false))
console.log(showUserRole("Admin"))


//AULA 10 - TYPE ALIAS
console.log("")
console.log("AULA 10")
console.log("")

type ID = string | number

function showId(id: ID){
    console.log(`The ID is: ${id}`)
}

showId(1)
showId("2")


//AULA 11 - INTERFACE
console.log("")
console.log("AULA 11")
console.log("")

interface Point{
    x: number
    y: number
    z: number
}

function showCoords(obj: Point){
    console.log(`X: ${obj.x} Y:${obj.y} Z:${obj.z}`)
}

const coordObj: Point = {
    x: 10,
    y: 15,
    z: 20
}

showCoords(coordObj)
