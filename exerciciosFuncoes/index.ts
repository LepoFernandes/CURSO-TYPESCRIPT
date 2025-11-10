//EXERCICIO 1

function showProductDetails(name: string, price: number){
    console.log(`The ${name} costs ${price.toFixed(2)}`)
}

showProductDetails("chicken", 30)
showProductDetails("computer", 3000)
showProductDetails("pasta", 29.9)


console.log("")
//EXERCICIO 2
console.log("")

function functionCall(name: string){
    return `Hello ${name}`
}

function processUser(f: (name: string) => string, user: string){
    console.log("User in process")

    const process = f(user)

    console.log(process)
}

processUser(functionCall, "Lucas")


console.log("")
//EXERCICIO 3
console.log("")


function showItems<T>(arr: T[]){
    arr.forEach(element => {
        console.log(element)
    });
}

showItems(["Casa", "Carro", "Moto"])
showItems([1, 2, 3, 4])
showItems([false, true])