module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "Password@123",
  DB: "replyMessage",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
