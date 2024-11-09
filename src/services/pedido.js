const database = require('../config/database')
const bcrypt = require("bcrypt")
const ModelPedido = require('../models/pedido')
const salt = 12;
// const model = new modelExercicio()
class Servicecedido
{
    
    async Mostrar()
     {
     return ModelPedido.findAll()
     }
    async Adicionar(data_pedido,status,clienteId)
    {
        if(!data_pedido )
        {
            throw new Error("Favor preencher todos os dados obrigatórios.")
        }
        
    return ModelPedido.create({nome, telefone, email,msg})
    }

    async Alterar(id,nome,email,telefone, msg)
    {
        console.log(id)
        if(!id)
        {
            throw new Error("Favor informar dado necessário (id)")
        }
        const pedido = await ModelPedido.findByPk(id)
        if(!pedido)
            {
                throw new Error("pedido nao encontrado")
            }
        pedido.nome = nome 
        ?nome
        :pedido.nome
        pedido.email = email 
        ? email
        :pedido.email
        pedido.telefone = telefone
        ? telefone
        :pedido.telefone
        pedido.msg = msg
        ? msg
        :pedido.msg
        

        pedido.save()
        return pedido
    }
    async Deletar(id)
    {
    const pedido = await ModelPedido.findByPk(id)
    if(!pedido)
    {
        throw new Error("pedido nao encontrado")
    }
    return pedido.destroy()
    }
    
}

module.exports = Servicecedido;