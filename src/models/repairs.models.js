const { DataTypes } = require("sequelize");
const { db } = require("../database/config");

const Repair = db.define("repair", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "pending",
    enum: ["pending", "in process", "finished"],
  },
  userid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Repair;
