import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL as string;
export const queryClient = postgres(connectionString);

export const db = drizzle(queryClient, { schema }); // Initialize a Drizzle ORM instance with schema

/*
When the `{schema}` option is provided, Drizzle ORM explicitly maps TypeScript models to the database structure. 
This enables Drizzle to understand the table definitions, column types, and relationships, providing benefits like:

1. **Type Safety**: Ensures queries, migrations, and other database operations are type-checked at compile-time, 
   reducing the likelihood of runtime errors and helping with auto-completion in TypeScript.
   
2. **Consistency**: Drizzle can generate queries and migrations that align with the actual structure of the database, 
   making sure your code and database remain in sync.

If the `schema` option is omitted, Drizzle will interact with the database without enforcing type-checking on the tables and columns.
This might be useful for some dynamic use cases, but it removes the safety net of TypeScript's static analysis.
*/
