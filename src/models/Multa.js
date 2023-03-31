import { Model, DataTypes } from 'sequelize';
import { Emprestimo } from "./Emprestimo.js";
import { Fita } from "./Fita.js";

class Multa extends Model {

  static init(sequelize) {
    super.init({
      emprestimoId: {
        type: DataTypes.INTEGER,
        references: { model: Emprestimo, key: 'id' },
        primaryKey: true,
        validate: {
          notEmpty: { msg: "ID do Empréstimo deve ser informado!" }
        }
      },
      fitaId: {
        type: DataTypes.INTEGER,
        references: { model: Fita, key: 'id' },
        primaryKey: true,
        validate: {
          notEmpty: { msg: "ID da Fita deve ser informada!" }
        }
      },
      valor: DataTypes.DOUBLE,
      pago: DataTypes.BOOLEAN
    }, { sequelize, modelName: 'multa', tableName: 'multas' })
  }

}

export { Multa };