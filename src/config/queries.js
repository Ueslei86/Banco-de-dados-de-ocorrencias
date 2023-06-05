export const CREATE_TABLE_VITIMA = `
  CREATE TABLE IF NOT EXISTS vitima (
    id INTEGER PRIMARY KEY,
    nome TEXT,
    idade INTEGER,
    genero TEXT
  );
`

export const CREATE_TABLE_OCORRENCIA = `
    CREATE TABLE IF NOT EXISTS ocorrencia (
      id INTEGER PRIMARY KEY,
      descricao TEXT,
      endereco TEXT,
      vitima INTEGER,
      houve_obito INTEGER,
      FOREIGN KEY (vitima) REFERENCES vitima(id)
    );
`

export const INSERT_VITIMA = `
      insert into vitima values (
        ?, ?, ?, ?
      )
`

export const INSERT_OCORRENCIA = `
      insert into ocorrencia values (
        ?, ?, ?, ?, ?
      )
`

export const SELECT_VITIMAS_BY_FAIXA_ETARIA = `
    SELECT * FROM vitima WHERE idade BETWEEN ? AND ?
`

export const SELECT_VITIMAS_DE_FEMINICIDIO = `
    SELECT vitima.nome, ocorrencia.descricao, ocorrencia.endereco FROM vitima
    INNER JOIN ocorrencia ON vitima.id = ocorrencia.vitima
    WHERE vitima.genero = 'Feminino' AND ocorrencia.houve_obito = 1
`

export const SELECT_VITIMAS_BY_ENDERECO = `
    SELECT DISTINCT vitima.* FROM vitima
    INNER JOIN ocorrencia ON vitima.id = ocorrencia.vitima
    WHERE LOWER(ocorrencia.endereco) LIKE ?
`

export const TRUNCATE_VITIMA = `
        delete from vitima
`

export const TRUNCATE_OCORRENCIA = `
        delete from ocorrencia
`
