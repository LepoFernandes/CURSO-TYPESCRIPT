//AULA 1 - VOID
console.log("")
console.log("AULA 1")
console.log("")

function withoutReturn(): void{
    console.log("Funcao sem retorno")
}

withoutReturn() //MUITO UTILIZADA EM FUNCOES QUE MEXEM COM O DOM


//AULA 2 - CALLBACK COMO ARGUMENTO
console.log("")
console.log("AULA 2")
console.log("")

function greeting(name: string){
    return `Hello ${name}`
}

function preGreeting(f: (name: string) => string, username: string){
    console.log("Preparando a funcao")

    const greet = f(username)

    console.log(greet)
}

preGreeting(greeting, "Matheus")


//AULA 3 - GENERIC FUNCTION
console.log("")
console.log("AULA 3")
console.log("")

function firstElement<T>(arr: T[]){
    return arr[0]
}

console.log(firstElement([1, 2, 3]))
console.log(firstElement(["A", "B", "C"]))
console.log(firstElement([true, false, true]))



function mergeObjects<T,U>(obj1: T, obj2:U){
    return{
        ...obj1,
        ...obj2
    }
}

const newObject = mergeObjects({name: "Matheus"}, {age: 30, job: "Programmer"})

console.log(newObject)


//AULA 4 - CONSTRAINTS
console.log("")
console.log("AULA 4")
console.log("")

function biggestNumber<T extends number | string>(a: T, b: T) : T{
    let biggest : T

    if(+a > +b){

        biggest = a

    } else {

        biggest = b
    }

    return biggest
}

console.log(biggestNumber(5, 3))
console.log(biggestNumber("51", "37"))



//AULA 5 - ESPECIFICA TIPO DE ARGUMENTOS
console.log("")
console.log("AULA 5")
console.log("")

function mergeArrays<T>(arr1: T[], arr2: T[]){
    return arr1.concat(arr2)
}

console.log(mergeArrays([1, 2, 3], [5, 6, 7]))
console.log(mergeArrays<number | string>([1, 2, 3], ["5", "6", "7"]))