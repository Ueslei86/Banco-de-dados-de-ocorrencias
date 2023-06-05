import { openDB } from './config/db.js'
import {
  SELECT_VITIMAS_BY_FAIXA_ETARIA,
  SELECT_VITIMAS_DE_FEMINICIDIO,
  SELECT_VITIMAS_BY_ENDERECO,
} from './config/queries.js'
;(async () => {
  const db = await openDB()

  let results

  results = await db.all(SELECT_VITIMAS_BY_FAIXA_ETARIA, 26, 34)
  console.log(results)

  
  results = await db.all(SELECT_VITIMAS_DE_FEMINICIDIO)
  console.log(results)

  results = await db.all(
    SELECT_VITIMAS_BY_ENDERECO,
    '%Rua A%'
  )
  console.log(results)
})()
