import { Model, DataTypes } from 'sequelize';

class Fita extends Model {

  static init(sequelize) {
    super.init({
      danificada: { 
        type: DataTypes.BOOLEAN, 
        validate: {
          notEmpty: { msg: "Informação sobre danificação da Fita deve ser preenchida!" }
        }
      },
      disponivel: { 
        type: DataTypes.BOOLEAN, 
        validate: {
          notEmpty: { msg: "Informação sobre disponibilidade da Fita deve ser preenchida!" }
        }
      }
    }, { sequelize, modelName: 'fita', tableName: 'fitas' })
  }
  
}

export { Fita };