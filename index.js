const express = require("express")
const routercliente = require("./src/routes/cliente")
const routerproduto = require("./src/routes/Produto")
const routerpedido = require("./src/routes/pedido")
const routercontato = require("./src/routes/contato")
const database = require('./src/config/database')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

app.use("/produto", routerproduto)
app.use("/cliente",routercliente)
app.use("/pedido",routerpedido)
app.use("/contato",routercontato)

//criar as rotas

const port = 3000

database.db
    .sync({ force: false })
    .then(( ) => {
        console.log("O banco conectado com sucesso")
        app.listen(port, () => {
            console.log( `Server rodando na porta ${port} ` )
        })
    })
    .catch((e) => {
        console.error(e)
    })
