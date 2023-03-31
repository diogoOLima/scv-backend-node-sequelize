import { Model, DataTypes } from 'sequelize';

class Filme extends Model {

  static init(sequelize) {
    super.init({
      titulo: { 
        type: DataTypes.STRING, 
        validate: {
          notEmpty: { msg: "Título do Filme deve ser preenchido!" },
          len: { args: [2, 50], msg: "Título do Filme deve ter entre 2 e 50 letras!" }
        }
      },
      genero: { 
        type: DataTypes.STRING, 
        validate: {
          notEmpty: { msg: "Título do Filme deve ser preenchido!" }
        }
      },
      duracao: { 
        type: DataTypes.STRING, 
        validate: {
          notEmpty: { msg: "Duração do Filme deve ser preenchida!" },
          is: {args: ["[0-9]{2}\:[0-9]{2}"], msg: "Duração do Filme deve seguir o formato: hh:mm!" },
        }
      },
      imagem: {
        type: DataTypes.BLOB('long'), // Armazenando String na Base64 (Postgresql)
        get() {
          return Buffer.from(this.getDataValue('imagem')).toString(); // Retornando no formato String
        },
        validate: {
          notEmpty: { msg: "Imagem do Filme deve ser preenchida!" }
        }
      }
    }, { sequelize, modelName: 'filme', tableName: 'filmes' })
  }
  
}

export { Filme };