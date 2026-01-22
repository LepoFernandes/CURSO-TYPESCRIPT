//DECORATORS 
export {}

function myDecorator() {
    console.log("Iniciando decorator!")
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("Executando decorator!")
        console.log(target)
        console.log(propertyKey)
        console.log(descriptor)
    }
}

class minhaclasseDec {
    @myDecorator()
    testing(){
        console.log("terminando execucao do metodo!")
    }
}


const meuobj2 = new minhaclasseDec()

meuobj2.testing()

console.log("TESTE")
