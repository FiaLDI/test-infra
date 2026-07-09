import "dotenv/config";

const normalizePort = (value: string | undefined) => {
  const parsedPort = Number(value);

  if (!Number.isInteger(parsedPort) || parsedPort <= 0) {
    return 4000;
  }

  return parsedPort;
};

const frontendOrigin =
  process.env.FRONTEND_ORIGIN || "http://localhost:3000";

const MONGO_URI =
  `mongodb://${process.env.MONGO_USER}:` +
  `${process.env.MONGO_PASSWORD}@` +
  `${process.env.MONGO_HOST}:` +
  `${process.env.MONGO_PORT}/?authSource=admin`;

export const env = {
  frontendOrigin,
  mongo: {
    dbName: process.env.MONGO_DB_NAME || "calc",
    uri: MONGO_URI,
  },
  port: normalizePort(process.env.PORT),
};