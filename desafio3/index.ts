function reviewUsers(user: string, stars: number, review?: boolean){
    if(typeof stars === "number" && typeof review === "boolean" && review){
        console.log(`User ${user} give ${stars} stars and leave a message`)
    } else if(typeof stars === "number" && !review) {
        console.log(`User ${user} give ${stars} stars and not leave a message`)
    }   
}


reviewUsers("Lucas", 3, true)
reviewUsers("Pedro", 4)
reviewUsers("Gabriel", 1, false)
reviewUsers("Henrique", 3, true)


//EXERCICIO 2 -- PEGUEI NO CHAT GPT
console.log("")
console.log("EXERCICIO 2")
console.log("")

function showID(id: string | number){
    if(typeof id === "string"){
        console.log(`O ID de texto é ${id}`)
    } else {
        console.log(`O ID numérico é ${id}`)
    }
}

showID(10)
showID("10")


//EXERCICIO 3 -- PEGUEI NO CHAT GPT
console.log("")
console.log("EXERCICIO 3")
console.log("")


function calculateTotal(price: string | number, discount: number | boolean){
    if(typeof price === "string"){

        let value = Number(price)

        if(typeof discount === "boolean" && discount){
            value = value - (value * 0.1)
            console.log(`O valor era ${price} com desconto de 10% ficou : ${value}`)
        } else if (typeof discount === "number"){
            value = value - (value * (discount / 100))
            console.log(`O valor era ${price} com desconto ficou : ${value}`)
        } else if (typeof discount === "boolean" && !discount){
            console.log(`Nenhum desconto aplicado, valor original : ${price}`)
        }
    } 
    else if (typeof price === "number"){
        let value = price

        if(typeof discount === "boolean" && discount){
            value = value - (value * 0.1)
            console.log(`O valor era ${price} com desconto de 10% ficou : ${value}`)
        } else if (typeof discount === "number"){
            value = value - (value * (discount / 100))
            console.log(`O valor era ${price} com desconto ficou : ${value}`)
        } else if (typeof discount === "boolean" && !discount){
            console.log(`Nenhum desconto aplicado, valor original : ${price}`)
        }
    }
}


calculateTotal(59.9, 10)
calculateTotal("59.9", true)
calculateTotal(64, 20)
calculateTotal("59.9", false)