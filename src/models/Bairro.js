import { Model, DataTypes } from 'sequelize';

class Bairro extends Model {

  static init(sequelize) {
    super.init({
      nome: { 
        type: DataTypes.STRING, 
        validate: {
          notEmpty: { msg: "Nome do Bairro deve ser preenchido!" },
          len: { args: [2, 50], msg: "Nome do Bairro deve ter entre 2 e 50 letras!" }
        }
      }
    }, { sequelize, modelName: 'bairro', tableName: 'bairros' })
  }
  
}

export { Bairro };