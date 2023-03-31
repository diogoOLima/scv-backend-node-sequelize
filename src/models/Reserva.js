import { Model, DataTypes } from 'sequelize';

class Reserva extends Model {

  static init(sequelize) {
    super.init({
      data: { 
        type: DataTypes.DATEONLY, 
        validate: {
          isDate: { msg: "Data da Reserva deve ser preenchida!" },
          is: {args: ["[0-9]{4}\-[0-9]{2}\-[0-9]{2}"], msg: "Data da Reserva deve seguir o padrão yyyy-MM-dd!" }
        }
      },
      status: { 
        type: DataTypes.INTEGER, 
        validate: {
          isInt: { msg: "Status da Reserva deve ser preenchido com um valor inteiro!" }
        }
      }
    }, { sequelize, modelName: 'reserva', tableName: 'reservas' })
  }

  static associate(models) {
    this.belongsTo(models.cliente, { as: 'cliente', foreignKey: {name: 'clienteId', allowNull: false, validate: {notNull: {msg: 'Cliente da Reserva deve ser preenchido!'}}}});
    this.belongsTo(models.fita, { as: 'fita', foreignKey: {name: 'fitaId', allowNull: false, validate: {notNull: {msg: 'Fita da Reserva deve ser preenchida!'}}}});
  }
  
}

export { Reserva };