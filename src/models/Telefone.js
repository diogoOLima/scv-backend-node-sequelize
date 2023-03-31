import { Model, DataTypes } from 'sequelize';

class Telefone extends Model {

  static init(sequelize) {
    super.init({
      numero: DataTypes.STRING,
    }, { sequelize, modelName: 'telefone', tableName: 'telefones' })
  }
  
}

export { Telefone };