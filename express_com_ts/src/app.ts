// 1 - INICIANDO PROJETO

// console.log("Express + TS!!")


// 2 - INIT EXPRESS

import express from 'express'

const app = express()

//3 - rota com POST
app.use(express.json())

app.get("/", (req, res) => {
    return res.send("Hello Express!")
})

//3 - rota com POST

app.post("/api/product", (req,res) => {
    console.log(req.body)

    return res.send("Produto adicionado!")
})

//4 - rota para todos os verbos

app.all("/api/product/check", (req,res) => {
    //req.method = VERBO HTTP

    if(req.method === "POST"){
        return res.send("Inseriu algum registro!")
    }else if (req.method === "GET"){
        return res.send("Leu algum registro!")
    } else {
        return res.send("Nao podemos realizar tal operacao!")
    }
        
})

app.listen(3000, () => {
    console.log("Aplicacao de TS + Express funcionando!!")
});