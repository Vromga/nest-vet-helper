export default () => ({
  port: parseInt(process.env.PORT) || 3000,
  login: process.env.LOGIN,
  password: process.env.PASSWORD,
  dbName: process.env.DATABASE_NAME,
});
