"use strict";
const { Sequelize, DataTypes } = require("sequelize");

let sequelize = {};
try {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: "mysql",
    }
  );
} catch (error) {
  console.log(error);
}

export default sequelize;
