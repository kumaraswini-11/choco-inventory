import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle", // Organizing migrations output folder
  dialect: "postgresql", // Dialect type for the database
  schema: "./src/db/schema.ts", // Ensure the correct path for the schema file
  dbCredentials: {
    url: process.env.DATABASE_URL as string, // Database URL from environment variables
  },
});
