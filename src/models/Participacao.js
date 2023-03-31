import { Model, DataTypes } from 'sequelize';

class Participacao extends Model {

  static init(sequelize) {
    super.init({
      personagem: { 
        type: DataTypes.STRING, 
        validate: {
          notEmpty: { msg: "Personagem da Participação deve ser preenchida!" }
        }
      }
    }, { sequelize, modelName: 'participacao', tableName: 'participacoes' })
  }

}

export { Participacao };