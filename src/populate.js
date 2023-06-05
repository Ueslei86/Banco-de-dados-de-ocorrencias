import { openDB } from './config/db.js'
import {
  CREATE_TABLE_VITIMA,
  CREATE_TABLE_OCORRENCIA,
  INSERT_VITIMA,
  INSERT_OCORRENCIA,
  TRUNCATE_VITIMA,
  TRUNCATE_OCORRENCIA,
} from './config/queries.js'

const vitimas = [
  {
    "id": 1,
    "nome": "Maria",
    "idade": 25,
    "genero": "Feminino"
  },
  {
    "id": 2,
    "nome": "João",
    "idade": 30,
    "genero": "Masculino"
  },
  {
    "id": 3,
    "nome": "Mariana",
    "idade": 35,
    "genero": "Feminino"
  }
]



const ocorrencias = [
  {
    "id": 1,
    "descricao": "Assalto",
    "endereco": "Rua A, 123",
    "vitima": 1,
    "houve_obito": 0
  },
  {
    "id": 2,
    "descricao": "Acidente de carro",
    "endereco": "Rua B, 456",
    "vitima": 1,
    "houve_obito": 1
  },
  {
    "id": 3,
    "descricao": "Assalto",
    "endereco": "Rua C, 789",
    "vitima": 2,
    "houve_obito": 0
  },
  {
    "id": 4,
    "descricao": "Acidente doméstico",
    "endereco": "Rua D, 1011",
    "vitima": 2,
    "houve_obito": 0
  },
  {
    "id": 5,
    "descricao": "Assalto",
    "endereco": "Rua E, 1213",
    "vitima": 3,
    "houve_obito": 0
  },
  {
    "id": 6,
    "descricao": "Agressão",
    "endereco": "Rua F, 1415",
    "vitima": 3,
    "houve_obito": 1
  }
]

;(async () => {
  const db = await openDB()
  await db.exec(CREATE_TABLE_VITIMA)
  await db.exec(CREATE_TABLE_OCORRENCIA)

  await db.exec(TRUNCATE_OCORRENCIA)
  await db.exec(TRUNCATE_VITIMA)

  for (let i = 0; i < vitimas.length; i++) {
    const { id, nome, idade, genero } =
      vitimas[i]

    console.log({ id, nome, idade, genero })

    await db.run(
      INSERT_VITIMA,
      id,
      nome,
      idade,
      genero
    )

    console.log(`Vítima #${i + 1} criada`)
  }

  for (let i = 0; i < ocorrencias.length; i++) {
    const { id, descricao, endereco, vitima, houve_obito } = ocorrencias[i]

    console.log({
      id,
      descricao,
      endereco,
      vitima,
      houve_obito
    })

    await db.run(INSERT_OCORRENCIA, id, descricao, endereco, vitima, houve_obito)
    console.log(`--> Ocorrência #${i + 1} criada`)
  }

  console.log('Mal feito desfeito')
})()