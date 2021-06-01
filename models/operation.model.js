"use strict";
import { DataTypes } from "sequelize";
import sequelize from "./index";

const Operation = sequelize.define(
  "Operation",
  {
    // Model attributes are defined here
    subjectId: { type: DataTypes.STRING },
    subjectType: { type: DataTypes.STRING },
    type: { type: DataTypes.STRING },
    reason: { type: DataTypes.STRING },
    done: { type: DataTypes.BOOLEAN, default: false },
  },
  {
    // Other model options go here
    timestamps: true,
  }
);

// Operation.sync({ force: true });
