"use strict";
import { DataTypes } from "sequelize";
import sequelize from "./index";

const Location = sequelize.define(
  "Location",
  {
    // Model attributes are defined here

    city: { type: DataTypes.STRING, primaryKey: true },
    state: { type: DataTypes.STRING },
    desc: { type: DataTypes.STRING },
    img: { type: DataTypes.STRING },
  },
  {
    // Other model options go here
    timestamps: true,
  }
);
