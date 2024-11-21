const { result } = require("lodash")
const Servicecliente = require("../services/cliente")
const cliente = require("../models/cliente")
const service = new Servicecliente

class ControllerCliente
{
    async Mostrar(req,res)
    {
        try{
            const id = req.params.id
            const result = await service.Mostrar()

            res.status(200).json(result)
        }catch(error){
            res.status(500).json(result)
        }
    }

    async Criar(req,res)
    {
        try{
            const nome = req.body.nome
            const email = req.body.email
            const senha = req.body.senha
            const telefone = req.body.telefone
            const endereco = req.body.telefone

            const Cliente = await service.Criar(nome, email, senha, telefone, endereco)
            res.status(201).json({message: `${JSON.stringify(Cliente)}Adicionado com sucesso`, })
        }catch(error){
            res.status(500).json({message: "Erro ao adicionar cliente"})
        }
    }

    async Alterar(req,res)
    {
        try{
            const id = req.params.id
            const {email, senha, telefone, endereco} = req.body
            const Cliente = await service.Alterar(id, email, senha, telefone, endereco)

            res.status(201).json({message: Cliente})
        }catch(error){
            console.log(error)
            res.status(500).json({message: "Erro ao alterar cliente"})
        }
    }

    async Deletar(req,res){
        try{
            const id = req.params.id
            await service.Deletar(id)

            res.status(204).send
        }catch(error){
            res.status(500).json({message: "Erro ao deletar"})
        }
    }

}
module.exports = ControllerCliente