const database = require('../config/database')

class ModelCliente {
    constructor() {
        this.model = database.db.define('cliente', {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: database.db.Sequelize.STRING
            },
            email: {
                type: database.db.Sequelize.STRING,
                unique: true
            },
            senha: {
                type: database.db.Sequelize.STRING
            },
            telefone:{
                type: database.db.Sequelize.INTEGER,
                unique: true 
            }
        })
    }
}
module.exports = new ModelPessoa().model