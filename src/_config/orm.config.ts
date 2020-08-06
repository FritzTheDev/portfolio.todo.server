import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  // apparently Typeorm doesn't allow globbing for files, only directories :rolled eyes:
  entities: [],
  migrations: ['src/_migrations/*.{js, ts}'],
  cli: {
    migrationsDir: '_migrations',
  },
};

export = config;
