## Getting Started

### Minimal setup
```bash
npm install
npm run db:migrate:dev:latest
npm run db:seed:dev
npm run dev
```

### Commands

Install node modules
```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


#### Database management

SQLite database resides in [`data/app.db`](data/) file.

Run DB migrations to create DB objects
```bash
npm run db:migrate:dev:latest
```

Create new migrations file in [`lib/db/migrations`](lib/db/migrations) directory
```bash
npm run db:migrate:dev:new
```

Generate DB typescript definitions models for Kysely query builder
```bash
npm run db:codegen:dev
```

Seed database with test data
```bash
npm run db:seed:dev
```
