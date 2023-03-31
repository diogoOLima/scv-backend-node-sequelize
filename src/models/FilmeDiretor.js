import { Model, DataTypes } from 'sequelize';
import { Filme } from "./Filme.js";
import { Diretor } from "./Diretor.js";

class FilmeDiretor extends Model {

  static init(sequelize) {
    super.init({
      filmeId: {
        type: DataTypes.INTEGER,
        references: { model: Filme, key: 'id' },
        validate: {
          notEmpty: { msg: "ID do Filme deve ser informado!" }
        }
      },
      diretorId: {
        type: DataTypes.INTEGER,
        references: { model: Diretor, key: 'id' },
        validate: {
          notEmpty: { msg: "ID do Diretor deve ser informado!" }
        }
      }
    }, { sequelize, modelName: 'filme_diretor', tableName: 'filmes_diretores' })
  }

}

export { FilmeDiretor };