// 1 - INICIANDO PROJETO

// console.log("Express + TS!!")


// 2 - INIT EXPRESS

import express from 'express'

const app = express()

app.get("/", (req, res) => {
    return res.send("Hello Express!")
})


app.listen(3000, () => {
    console.log("Aplicacao de TS + Express funcionando!!")
});