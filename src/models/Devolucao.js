import { Model, DataTypes } from 'sequelize';
import { Emprestimo } from "./Emprestimo.js";
import { Fita } from "./Fita.js";

class Devolucao extends Model {

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
      data: { 
        type: DataTypes.DATEONLY, 
        validate: {
          isDate: { msg: "Data da Devolução deve ser preenchida no formato yyyy-MM-dd!" }
        }
      }
    }, { sequelize, modelName: 'devolucao', tableName: 'devolucoes' })
  }

  static associate(models) {
    this.belongsTo(models.devolucao, { as: 'fita', foreignKey: {name: 'fitaId', allowNull: false, validate: {notNull: {msg: 'Fita da Devoução deve ser preenchida!'} }} } );
    this.belongsTo(models.devolucao, { as: 'emprestimo', foreignKey: {name: 'emprestimoId', allowNull: false, validate: {notNull: {msg: 'Empréstimo da Devolução deve ser preenchido!'} }} } );
  }

}

export { Devolucao };