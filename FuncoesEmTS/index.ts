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



//AULA 6 - PARAMETROS OPCIONAIS
console.log("")
console.log("AULA 6")
console.log("")

function apresentarPessoa(name: string, age?: number, occupation?: string) {
    if (age && occupation){
        return console.log(`Oi, meu nome é ${name}! Tenho ${age} anos e sou ${occupation} `)
    } else if (age){
        occupation = "desempregado"
        return console.log(`Oi, meu nome é ${name}! Tenho ${age} anos e sou ${occupation} `)
    } else if (occupation){
        return console.log(`Oi, meu nome é ${name}! E sou ${occupation} `)
    } else {
        return console.log(`Oi, meu nome é ${name}! `)
    }
}


apresentarPessoa("Lucas", 26, "Programador")
apresentarPessoa("Lucas", undefined, "Programador")
apresentarPessoa("Lucas")
apresentarPessoa("Lucas", 26)


//AULA 7 - PARAMETRO DEFAULT (EXEMPLO MAIS EXTENSO PEGUEI DO CHAT GPT MAS DA PRA REFINAR)
console.log("")
console.log("AULA 7")
console.log("")

function calcularPagamento(valorBase: number, metodo = "dinheiro", parcelas?: number){

    if(metodo === "dinheiro" || metodo === "pix"){
        
        let valorAlterado = valorBase
        valorAlterado = valorBase - (valorBase * 0.1)
        return console.log(`Pagamento feito em dinheiro ou pix no valor de ${valorAlterado.toFixed(2)}`)

    } else if (metodo === "cartao"){
        
        if (parcelas === 1){

            return console.log(`Pagamento feito no cartao em 1x de ${valorBase.toFixed(2)}`)

        } else if (parcelas){
            
            if(parcelas > 1 && parcelas < 6){
                
                let valorAlterado = valorBase + (valorBase * 0.05)
                valorAlterado = valorAlterado / parcelas

                return console.log(`Pagamento feito no cartao em ${parcelas} de ${valorAlterado.toFixed(2)}`)

            }else if(parcelas >= 7){

                let valorAlterado = valorBase + (valorBase * 0.10)
                valorAlterado = valorAlterado / parcelas

                return console.log(`Pagamento feito no cartao em ${parcelas} de ${valorAlterado.toFixed(2)}`)
            }

        }
    }

}

calcularPagamento(100); 
calcularPagamento(100, "cartao", 3);
calcularPagamento(100, "cartao", 12);

//LEMBRAR SEMPRE DE TRATAR O MAIS DIFICIL OU EXTENSO PRIMEIRO Q DAI SOBRA O MAIS SIMPLES PRA UM UNICO ELSE
//NAO FIZ ISSO NO CASO DE CIMA MAS PODERIA

