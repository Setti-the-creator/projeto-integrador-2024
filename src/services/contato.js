const database = require('../config/database')
const bcrypt = require("bcrypt")
const ModelContado = require('../models/contato')
const salt = 12;
// const model = new modelExercicio()
class Servicecliente
{
    
    async Mostrar()
     {
     return ModelCliente.findAll()
     }
    async Adicionar(nome,email, senha,telefone)
    {
        if(!nome || !telefone|| !email|| !senha)
        {
            throw new Error("Favor preencher todos os dados obrigatórios.")
        }
        const hashSenha = await bcrypt.hash( senha,salt)
    return ModelCliente.create({senha: hashSenha, nome, telefone, email})
    }

    async Alterar(id, nome,email, senha, telefone)
    {
        console.log(id)
        if(!id)
        {
            throw new Error("Favor informar dado necessário (id)")
        }
        const cliente = await ModelCliente.findByPk(id)
        if(!cliente)
            {
                throw new Error("Cliente nao encontrado")
            }
        cliente.nome = nome 
        ?nome
        :cliente.nome
        cliente.email = email 
        ? email
        :cliente.email
        cliente.senha = senha 
        ?await bcrypt.hash(senha,salt)
        :cliente.nome
        cliente.telefone = telefone
        ? telefone
        :cliente.telefone
        

        cliente.save()
        return cliente
    }
    async Deletar(id)
    {
    const cliente = await ModelCliente.findByPk(id)
    if(!cliente)
    {
        throw new Error("Cliente nao encontrado")
    }
    return cliente.destroy()
    }
    
}

module.exports = Servicecliente;