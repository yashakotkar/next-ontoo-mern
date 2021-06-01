"use strict";
import { DataTypes } from "sequelize";
import sequelize from "./index";

const Home = sequelize.define(
  "Home",
  {
    // Model attributes are defined here
    position: { type: DataTypes.INTEGER },
  },
  {
    // Other model options go here
    timestamps: true,
  }
);

Home.belongsTo(sequelize.models.Category);
Home.belongsTo(sequelize.models.Menu);

// Home.sync({ force: true });
