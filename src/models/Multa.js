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

  static associate(models) {
    this.belongsTo(models.emprestimo, { as: 'emprestimo', foreignKey: {name: 'emprestimoId' , allowNull: false, validate: {notNull: {msg: 'Empréstimo da Multa deve ser preenchido!'} }}});
    this.belongsTo(models.fita, { as: 'fita', foreignKey: {name: 'fitaId', allowNull: false, validate: {notNull: {msg: 'Fita da Multa deve ser preenchida!'}}}});
  }

}

export { Multa };