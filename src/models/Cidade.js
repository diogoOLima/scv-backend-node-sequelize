import { Model, DataTypes } from 'sequelize';

class Cidade extends Model {

  static init(sequelize) {
    super.init({
      nome: { 
        type: DataTypes.STRING, 
        validate: {
          notEmpty: { msg: "Nome da Cidade deve ser preenchida!" },
          len: { args: [2, 50], msg: "Nome da Cidade deve ter entre 2 e 50 letras!" }
        }
      }
    }, { sequelize, modelName: 'cidade', tableName: 'cidades' })
  }
  
}

export { Cidade };