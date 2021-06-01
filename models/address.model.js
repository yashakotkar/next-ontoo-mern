"use strict";
import { Sequelize, DataTypes } from "sequelize";
import sequelize from "./index";

const Address = sequelize.define(
  "Address",
  {
    name: { type: DataTypes.STRING },
    houseNo: { type: DataTypes.STRING },
    street1: { type: DataTypes.STRING },
    street2: { type: DataTypes.STRING },
    pinCode: { type: DataTypes.STRING(6) },
    city: { type: DataTypes.STRING },
    state: { type: DataTypes.STRING },
    landmark: { type: DataTypes.STRING },
    phoneNumber: { type: DataTypes.STRING(10) },
  },
  {
    // Other model options go here
    timestamps: true,
  }
);

Address.belongsTo(sequelize.models.User);
// Address.sync({ force: true });
