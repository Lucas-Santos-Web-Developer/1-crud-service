import express from 'express'
import mongoose from 'mongoose'

const app = express()



app.use(express.json())

app.get('/', ( req, res ) => res.json({message: 'Hello world!'}))

mongoose.connect('mongodb://127.0.0.1:27017/crud-service')
.then(() => {
  app.listen(3000, () => console.log('Servidor rodando!'))
})

.catch(error => console.log(`Houve um erro ao conectar ao banco de dados: ${error}`))
