import { Model, DataTypes } from 'sequelize';
import { Emprestimo } from "./Emprestimo.js";
import { Fita } from "./Fita.js";

class ItemDeEmprestimo extends Model {

  static init(sequelize) {
    super.init({
      /*
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
      */
      valor: { 
        type: DataTypes.DOUBLE, 
        validate: {
          isFloat: { msg: "Valor do Item de Empréstimo deve ser preenchido com um valor decimal!" }
        }
      },
      entrega: { 
        type: DataTypes.DATEONLY, 
        validate: {
          isDate: { msg: "Data de Entrega do Item de Empréstimo deve ser preenchida!" },
          is: {args: ["[0-9]{4}\-[0-9]{2}\-[0-9]{2}"], msg: "Data de Entrega do Item de Empréstimo deve seguir o padrão yyyy-MM-dd!" }
        }
      }
    }, { sequelize, modelName: 'itemDeEmprestimo', tableName: 'itens_de_emprestimo' })
  }

  static associate(models) {
    this.belongsTo(models.emprestimo, {as: 'emprestimo', foreignKey: {name: 'emprestimoId', allowNull: false, validate: {notNull: {msg: 'Empréstimo do Item de Empréstimo deve ser preenchido!'} }}});
    this.belongsTo(models.fita, {as: 'fita', foreignKey: {name: 'fitaId', allowNull: false, validate: {notNull: {msg: 'Fita do Item de Empréstimo deve ser preenchida!'}}}});
  }

}

export { ItemDeEmprestimo };