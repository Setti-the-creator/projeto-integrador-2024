const database = require('../config/database')
const ModelCliente = require('./cliente.js')

class ModelPedido {
    constructor() {
        this.model = database.db.define('pedido', {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            data_pedido: {
                type: database.db.Sequelize.STRING
            },
            data_entrega: {
                type: database.db.Sequelize.STRING
            },
            status: {
                type: database.db.Sequelize.STRING,
                unique: true
            },
            observacoes: {
                type: database.db.Sequelize.STRING
            },
            clienteId : {
                references: {
                    model: ModelCliente.model,
                    key: 'id'
                }
            }
        });
        this.model.belongsTo(ModelCliente.model, { foreignKey: 'Id' });
        // this.model.belongsTo(ModelPedido)
        // cliente.hasOne(cliente)
    }
}
module.exports = new ModelPedido().model