const database = require('../config/database')

class ModelProduto {
    constructor() {
        this.model = database.db.define('produto', {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                
                autoIncrement: true
            },
            nome: {
                type: database.db.Sequelize.STRING
            },
           tipo:
            {
                type: database.db.Sequelize.STRING
            },
            telefone:{
                type: database.db.Sequelize.INTEGER,
                unique: true 
            }
        })
    }
}
module.exports = new ModelContado().model