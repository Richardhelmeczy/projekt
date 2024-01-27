import path from 'path'
import { promises as fs } from 'fs'
import { Kysely, Migrator, FileMigrationProvider } from 'kysely'
import { dialect, migrationFolder } from '../../db/db-config'

export function createMigrator() {
  const db = new Kysely<unknown>({
    dialect,
  })

  const migrator = new Migrator({
    db,
    provider: new FileMigrationProvider({
      fs,
      path,
      migrationFolder,
    }),
  })

  return { db, migrator }
}
