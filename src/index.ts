import "reflect-metadata";
import { config as loadEnv } from "dotenv";
import { createConnection } from "typeorm";
import { validateEnv } from "./_utils";

loadEnv();
validateEnv();

const startServer = async () => {
  const connection = await createConnection();
  await connection.runMigrations();
}

startServer();