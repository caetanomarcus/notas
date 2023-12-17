import express from 'express'
import cors from 'cors'
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

//rotas
app.get('/alunos', (req, res) => {
    res.status(200).send(alunos)
})

app.get('/alunos/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    const aluno = alunos.find( e => e.id === Number(id))

    if(!Number(id)) {
        res.status(400).json({message: "Informe um id válido"})
    }
    if(!!aluno ){
        res.status(200).send(aluno)
    } else {
        res.status(404).json({message: "O aluno não existe na base de dados"})
    }
})


app.listen(port, () => {
    console.log('server start on port: ', port)
})