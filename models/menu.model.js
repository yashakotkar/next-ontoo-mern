"use strict";
import { Sequelize, DataTypes } from "sequelize";
import sequelize from "./index";
import Category from "./category.model";

const Menu = sequelize.define(
  "Menu",
  {
    // Model attributes are defined here
    name: { type: DataTypes.STRING },
    img: DataTypes.STRING,
    type: DataTypes.STRING,
    desc: DataTypes.STRING(500),
    // category: {
    //   type: DataTypes.STRING,
    //   references: {
    //     model: sequelize.models.Category,
    //     key: "name",
    //   },
    // },
  },
  {
    // Other model options go here
    timestamps: true,
  }
);

Menu.belongsTo(sequelize.models.Category);

// Menu.sync({ alter: true });
