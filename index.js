import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { verifyIfIdIsValid } from './utils.js'
const app = express()
const port = 3000

const alunos = [
    {
      id: 1,
      nome: "Luna",
      idade: 15,
      endereco: "Estrada do Bananal",
      telefone: 98878468,
      media1: 80,
      media2: 90
    },
    {
      id: 2,
      nome: "Bento",
      idade: 16,
      endereco: "Rua Imperatriz",
      telefone: 98763456,
      media1: 90,
      media2: 100
    },
    {
      id: 3,
      nome: "Alice",
      idade: 14,
      endereco: "Rua Nova Luz",
      telefone: 98305835,
      media1: 70,
      media2: 80
    },
    {
      id: 4,
      nome: "Tom",
      idade: 15,
      endereco: "Estrada Uruguai",
      telefone: 97224560,
      media1: 60,
      media2: 70
    }
   ]


app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//rotas

/*  GET  */
app.get('/alunos', (req, res) => {
    res.status(200).send(alunos)
})

app.get('/alunos/:id', (req, res) => {
    const id = req.params.id;
    const aluno = alunos.find( e => e.id === Number(id))

    verifyIfIdIsValid(res, id)

    if(!!aluno ){
        res.status(200).send(aluno)
    } else {
        res.status(404).json({message: "O aluno não existe na base de dados"})
    }
})


/*  PUT */
app.put('/alunos/:id', (req, res) => {
    const id = req.params.id;
    const payload = req.body;
    const index = alunos.findIndex(e => e.id === Number(id))
    

    verifyIfIdIsValid(res, id)

    if(index !== -1){
        alunos[index] = payload;
        res.status(200).send(alunos[index])
    } else {
        res.status(404).json({message: "Não existe aluno com o id enviado."})
    }
})

/*  DELETE  */
app.delete('/alunos/:id', (req, res) => {
    const id = req.params.id;
    const index = alunos.findIndex(e => e.id === Number(id))

    
    verifyIfIdIsValid(res, id)

    if(index !== -1){
        alunos.splice(index, 1)
        res.status(200).send(alunos)
    } else {
        res.status(404).json({message: "Não existe aluno com o id enviado."})
    }
})

app.listen(port, () => {
    console.log('server start on port: ', port)
})


