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

//AULA 4 - revisao de type parameters
console.log("")
console.log("AULA 4 - TYPE PARAMETERS")
console.log("")

function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
    return `A chave ${String(key)} esta presente no objeto e tem valor de ${String(obj[key])}`
}

const server = {
    HD : '2TB',
    RAM: '32GB'
}

console.log(getSomeKey(server, 'RAM'))


//AULA 5 - keyof Type Operator
console.log("")
console.log("AULA 5 - keyof TYPE OPERATOR")
console.log("")


type Character = {name: string, age: number, driveLicense: boolean}

type C = keyof Character

function showCharName(obj: Character, key: C): string{
    return `${obj[key]}`
}

const myChar: Character = {
    name: "Lucas",
    age: 26,
    driveLicense: true
}

console.log(showCharName(myChar, 'name'))


//AULA 6 - typeof Type Operator
console.log("")
console.log("AULA 6 - typeof TYPE OPERATOR")
console.log("")

const userName : string = "Lucas"
const userName2 : typeof userName = "Lepo"

type x = typeof userName
const userName3 : x = "Fernandes"


//AULA 7 - Indexed acess types
console.log("")
console.log("AULA 7 - INDEXED ACCESS TYPES")
console.log("")

type Truck = {
    km: number
    kg: number
    description: string
}

type Km = Truck['km']

const newTruck: Truck ={
    km: 10000,
    kg: 5000,
    description: "Caminhao pequeno porte"
}

function showKM(km: Km){
    console.log(`O veiculo tem a km de : ${km}`)
}


showKM(newTruck.km)


//AULA 8 - Conditional types
console.log("")
console.log("AULA 8 - CONDITIONAL TYPES")
console.log("")

interface A {}
interface B extends A {}

type myType = B extends A ? number : string


const someVar: myType = 5 //funciona ja que o B realmente tem extensao de A 


//AULA 9 - Template Literals
console.log("")
console.log("AULA 9 - TEMPLATE LITERALS TYPE")
console.log("")


type testA = "text"

type customType = `some ${testA}`

const testing: customType = "some text"


type a1 = "Testando"
type a2 = "Union"

type a3 = `${a1}` | `${a2}`