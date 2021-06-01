"use strict";
import { DataTypes } from "sequelize";
import sequelize from "./index";

const Category = sequelize.define(
  "Category",
  {
    // Model attributes are defined here
    img: DataTypes.STRING,
    name: { type: DataTypes.STRING, primaryKey: true },
    desc: DataTypes.STRING(500),
    note: { type: DataTypes.STRING(200) },
    instruction: { type: DataTypes.STRING(1000) },
  },
  {
    // Other model options go here
    timestamps: true,
  }
);

// Category.sync({ alter: true });
