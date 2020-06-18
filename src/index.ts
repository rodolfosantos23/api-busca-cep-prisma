import { PrismaClient } from '@prisma/client'
import * as bodyParser from 'body-parser'
import * as express from "express";


const prisma = new PrismaClient()
const app = express()

app.use(bodyParser.json())

app.get(`/cep/:cep`, async (req, res) => {
    const { cep } = req.params
    const consulta = await prisma.cep.findOne({
        where: {
            cep: cep,
        },
        include: {
            cidades: {
                include: {
                    estados: true
                }
            }
        }
    })

    const retorno = {
        cep: consulta.cep,
        logradouro: consulta.logradouro,
        bairro: consulta.bairro,
        complemento: consulta.complemento,
        cidade: consulta.cidades.nome,
        estado: consulta.cidades.estados.uf
    }

    consulta ? res.json(retorno) : res.json({ erro: 'CEP não encontrado' });
})

const server = app.listen(3333, () =>
    console.log(
        'Server ready at: http://localhost:3333',
    ),
)