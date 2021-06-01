"use strict";
import { DataTypes } from "sequelize";
import sequelize from "./index";

const PinCodes = sequelize.define(
  "PinCode",
  {
    // Model attributes are defined here

    code: { type: DataTypes.STRING(6), primaryKey: true },
    // city: {
    //   type: DataTypes.STRING,
    //   references: {
    //     model: sequelize.models.Location,
    //     key: "city",
    //   },
    // },
  },
  {
    // Other model options go here
    timestamps: true,
  }
);

PinCodes.belongsTo(sequelize.models.Location);
