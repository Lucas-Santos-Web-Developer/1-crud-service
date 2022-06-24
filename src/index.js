const express = require('express')
const mongoose = require('mongoose')

const router = require('./routes')

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', router)

mongoose.connect('mongodb://127.0.0.1:27017/crud-service')
.then(() => {
  app.listen(3000, () => console.log('Servidor rodando!'))
})

.catch(error => console.log(`Houve um erro ao conectar ao banco de dados: ${error}`))
