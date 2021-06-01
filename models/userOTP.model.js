"use strict";
import { DataTypes } from "sequelize";
import sequelize from "./index";

const UserOTP = sequelize.define(
  "UserOTP",
  {
    // Model attributes are defined here
    otp: { type: DataTypes.INTEGER },
  },
  {
    // Other model options go here
    timestamps: true,
  }
);

UserOTP.belongsTo(sequelize.models.User);

// UserOTP.sync({ alter: true });
