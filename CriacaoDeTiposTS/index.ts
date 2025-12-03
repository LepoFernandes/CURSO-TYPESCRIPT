//AULA 1 - revisao de generics
console.log("")
console.log("AULA 1 - GENERICS")
console.log("")


function showData<T>(arg: T): string {
    return `O dado sera: ${arg}`
}

console.log(showData(5))
console.log(showData("testando generic"))
console.log(showData(true))
console.log(showData(["teste", 5]))


//AULA 2 - revisao de constraint em generics
console.log("")
console.log("AULA 2 - CONSTRAINT EM GENERIC")
console.log("")


function showProductName<T extends {name: string}>(obj : T){
    return `O nome do produto: ${obj.name}`
}

const product = {name: "Porta", cor: "Verde"}
const otherProduct = {name: "Carro", wheels: 4, cor: "Branco"}

console.log(showProductName(product))
console.log(showProductName(otherProduct))
//DESDE QUE TENHA NAME NESSE CASO QQR OBJETO SERA ACEITO POREM E OBRIGATORIO TEM NAME


//AULA 3 - revisao de interface com generics
console.log("")
console.log("AULA 3 - INTERFACE EM GENERIC")
console.log("")

interface myObject<T,U,Q> {
    name: string
    wheels: T
    engine: U
    color: Q
}

type Car = myObject<number, number, string>
type Pen = myObject<boolean, boolean, string>

const myCar:Car = {name: "Fusca", wheels: 4, engine: 2.0, color: "Branco"}
const myPen:Pen = {name: "Caneta BIC", wheels: false, engine: false, color: "Azul"}

console.log(myCar)
console.log(myPen)