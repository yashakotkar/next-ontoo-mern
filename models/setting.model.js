"use strict";
import { DataTypes } from "sequelize";
import sequelize from "./index";

const Setting = sequelize.define(
  "Setting",
  {
    // Model attributes are defined here

    minDeliveryTime: { type: DataTypes.INTEGER },
    timeSlots: { type: DataTypes.JSON },
    shippingCost: { type: DataTypes.INTEGER },
    maxOrderAmountForShipping: { type: DataTypes.INTEGER },
    homeImages: { type: DataTypes.JSON },
  },
  {
    // Other model options go here
    timestamps: true,
  }
);

// Setting.sync({ alter: true }).catch((err) => console.log(err));
