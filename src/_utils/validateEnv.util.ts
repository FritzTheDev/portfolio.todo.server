import { cleanEnv, port, str, url } from 'envalid';

export const validateEnv = (): void => {
  cleanEnv(process.env, {
    JWT_SECRET: str(),
    DATABASE_URL: url(),
    PORT: port(),
  });
};
