const { Sequelize } = require("sequelize");

const db = new Sequelize({
  dialect: "postgres",
  database: "tarea1",
  username: "postgres",
  password: "Jlpv00",
  host: "localhost",
  port: 5432,
  logging: false,
});

module.exports = { db };
