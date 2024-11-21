const database = require('../config/database')
const bcrypt = require("bcrypt")
const ModelContato = require('../models/contato')
const salt = 12;
// const model = new modelExercicio()
class Servicecontato
{
    
    async Mostrar()
     {
     return ModelContato.findAll()
     }
    async Adicionar(nome,email,telefone,msg)
    {
        if(!nome || !telefone|| !email)
        {
            throw new Error("Favor preencher todos os dados obrigatórios.")
        }
        
    return ModelContato.create({nome, telefone, email,msg})
    }

    async Alterar(id,nome,email,telefone, msg)
    {
        console.log(id)
        if(!id)
        {
            throw new Error("Favor informar dado necessário (id)")
        }
        const contato = await ModelContato.findByPk(id)
        if(!contato)
            {
                throw new Error("contato nao encontrado")
            }
        contato.nome = nome 
        ?nome
        :contato.nome
        contato.email = email 
        ? email
        :contato.email
        contato.telefone = telefone
        ? telefone
        :contato.telefone
        contato.msg = msg
        ? msg
        :contato.msg
        

        contato.save()
        return contato
    }
    async Deletar(id)
    {
    const contato = await ModelContato.findByPk(id)
    if(!contato)
    {
        throw new Error("contato nao encontrado")
    }
    return contato.destroy()
    }
    
}

module.exports = Servicecontato;