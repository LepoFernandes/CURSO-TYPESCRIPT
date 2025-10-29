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