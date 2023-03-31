import Sequelize from 'sequelize';
import { dbConfig } from "../config/database-config.js";

import { Uf } from '../models/Uf.js';
import { Cidade } from '../models/Cidade.js';
import { Bairro } from '../models/Bairro.js';
import { Cliente } from '../models/Cliente.js';
import { Funcionario } from '../models/Funcionario.js';
import { Gerente } from '../models/Gerente.js';
import { Telefone } from '../models/Telefone.js';
import { TipoDeFilme } from '../models/TipoDeFilme.js';
import { Diretor } from '../models/Diretor.js';
import { Artista } from '../models/Artista.js';
import { Filme } from '../models/Filme.js';
import { FilmeDiretor } from '../models/FilmeDiretor.js';
import { Participacao } from '../models/Participacao.js';
import { Fita } from '../models/Fita.js';
import { Emprestimo } from '../models/Emprestimo.js';
import { ItemDeEmprestimo } from '../models/ItemDeEmprestimo.js';
import { Multa } from '../models/Multa.js';
import { Devolucao } from '../models/Devolucao.js';
import { Reserva } from '../models/Reserva.js';

function databaseInserts() {

    const sequelize = new Sequelize(dbConfig);

    Uf.init(sequelize);
    Cidade.init(sequelize);
    Bairro.init(sequelize);
    Cliente.init(sequelize);
    Funcionario.init(sequelize);
    Gerente.init(sequelize);
    Telefone.init(sequelize);
    TipoDeFilme.init(sequelize);
    Diretor.init(sequelize);
    Artista.init(sequelize);
    Filme.init(sequelize);
    FilmeDiretor.init(sequelize);
    Participacao.init(sequelize);
    Fita.init(sequelize);
    Emprestimo.init(sequelize);
    ItemDeEmprestimo.init(sequelize);
    Multa.init(sequelize);
    Devolucao.init(sequelize);
    Reserva.init(sequelize);

    (async () => {
        await sequelize.sync({ force: true });
    })();

}

export default databaseInserts;