import { SqliteDialect } from 'kysely'
import SQLite from 'better-sqlite3'
import path from 'node:path'

export const dialect = new SqliteDialect({
  database: new SQLite(path.join('data', 'app.db')),
})

export const migrationFolder = path.join(__dirname, 'migrations')
