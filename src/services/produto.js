const database = require('../config/database')
const bcrypt = require("bcrypt")
const ModelProduto = require('../models/produto')
const salt = 12;
// const model = new modelExercicio()
class Serviceproduto
{
    
    async Mostrar()
     {
     return ModelProduto.findAll()
     }
    async Adicionar(nome,tipo,telefone)
    {
        if(!nome || !telefone|| !tipo)
        {
            throw new Error("Favor preencher todos os dados obrigatórios.")
        }
        
    return ModelProduto.create({ nome, telefone, email})
    }

    async Alterar(id, nome, telefone, tipo)
    {
        console.log(id)
        if(!id)
        {
            throw new Error("Favor informar dado necessário (id)")
        }
        const Produto = await ModelProduto.findByPk(id)
        if(!Produto)
            {
                throw new Error("Produto nao encontrado")
            }
        Produto.nome = nome 
        ?nome
        :Produto.nome
        Produto.tipo = tipo 
        ? tipo
        :Produto.tipo
        Produto.telefone = telefone
        ? telefone
        :Produto.telefone
        

        Produto.save()
        return Produto
    }
    async Deletar(id)
    {
    const Produto = await ModelProduto.findByPk(id)
    if(!Produto)
    {
        throw new Error("Produto nao encontrado")
    }
    return Produto.destroy()
    }
    
}

module.exports = Serviceproduto;