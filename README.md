# Prisma

## Prisma Initialization

```
npx prisma init --datasource-provider postgresql
```

Options to use for _datasource_ provider:

-   postgresql
-   mysql
-   sqlite
-   sqlserver
-   mongodb
-   cockroachdb

By default, schema file is generated in on of the following locations:

-   ./prisma/schema.prisma
-   ./schema.prisma

To use a different location you can:

1. Specify schema file location in package.json

    ```
    "prisma": {
    	"schema": "db/schema.prisma"
    }
    ```

2. Use `--schema` flag when executing on of the commands:
    - `introspect`
    - `generate`
    - `migrate`
    - `studio`

Example:

```
prisma generate --schema=./alternative/schema.prisma
```

---

## Database synchronization

### Generating Prisma schema from existing database

```
npx prisma db pull
```

### Updating database. To be used for prototyping and for databases that does not support migrations

```
npx prisma db push
```

If `db push` anticipates that the changes could result in data loss, it will throw an error. To still make the changes use `--accept-data-loss` option

---

## Migrations and client generation

Adding and applying a migration

```
npx prisma migrate dev --name <migration_name>
```

To reset **development** database:

```
npx prisma migrate reset
```

This command will:

1. Recreate database/schema
2. Apply all migrations
3. Run seed scripts

When migration is executed a client is generated / regenerated automatically. To manually generate client run:

```
npx prisma generate
```

---

## Formatting schema file (Can use Prisma VSCode extension for this)

```
npx prisma format
```

---

## Using prisma studio

```
npx prisma studio
```

---

## Seeding database

Command used to seed database is

```
npx prisma db seed
```

To be able to use this command it is necessary to add `seed` command to `prisma` section of `package.json` file.
Seed command can be any command used to actually seed the database. For example, you can run the file where you are using prisma client to insert values into the database.

```json
"prisma": {
    "seed": "ts-node ./prisma/seed.ts"
}
```
