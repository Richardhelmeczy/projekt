import { CamelCasePlugin, Kysely } from 'kysely'
import { DB } from './db.d'
import { dialect } from '../../lib/db/db-config'

export function createDB() {
  return new Kysely<DB>({
    dialect,
    plugins: [new CamelCasePlugin()],
    log: (event) => {
      if (event.level === 'query') {
        console.log(event.query.sql)
        console.log(event.query.parameters)
      }
    },
  })
}
