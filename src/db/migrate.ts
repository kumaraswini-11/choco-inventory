import { migrate } from "drizzle-orm/postgres-js/migrator";

import { db, queryClient } from "./db";

(async () => {
  try {
    await migrate(db, { migrationsFolder: "./drizzle" });
  } catch (error) {
    console.error("Migration failed :: ", error);
  } finally {
    await queryClient.end();
  }
})();
