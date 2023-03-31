import { Model, DataTypes } from 'sequelize';

class Telefone extends Model {

  static init(sequelize) {
    super.init({
      numero: DataTypes.STRING,
    }, { sequelize, modelName: 'telefone', tableName: 'telefones' })
  }

  static associate(models) {
    this.belongsTo(models.cliente, { as: 'cliente', foreignKey: {name: 'clienteId', allowNull: false, validate: {notNull: {msg: 'Cliente do Telefone deve ser preenchido!'}}}});
  }
  
}

export { Telefone };