import { createMigrator } from './common'

async function migrateDown() {
  const { db, migrator } = createMigrator()

  const { error, results } = await migrator.migrateDown()

  results?.forEach((it) => {
    if (it.status === 'Success') {
      console.log(`migration "${it.migrationName}" was rolled back successfully`)
    } else if (it.status === 'Error') {
      console.error(`failed to roll ack migration "${it.migrationName}"`)
    }
  })

  if (error) {
    console.error('failed to roll back')
    console.error(error)
    process.exit(1)
  }

  await db.destroy()
}

migrateDown()
