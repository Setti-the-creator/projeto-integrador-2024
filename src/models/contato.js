const database = require('../config/database')

class ModelContado {
    constructor() {
        this.model = database.db.define('contato', {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: database.db.Sequelize.STRING
            },
            email:
            {
                type: database.db.Sequelize.STRING
            },
            telefone:{
                type: database.db.Sequelize.INTEGER,
                unique: true 
            },
            msg:
            {
                type:database.db.STRING
            }
        })
    }
}
module.exports = new ModelContado().model