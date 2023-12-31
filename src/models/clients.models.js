const { DataTypes } = require("sequelize");
const { db } = require("../database/config");

const Client = db.define("clients", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "client",
    enum: ["client", "employe"],
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "available",
    enum: ["available", "disabled"],
  },
});
module.exports = Client;
