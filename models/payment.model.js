"use strict";
import { Sequelize, DataTypes } from "sequelize";
import sequelize from "./index";

const Payment = sequelize.define(
  "Payment",
  {
    // Model attributes are defined here
    paymentId: DataTypes.STRING,
    requestId: { type: DataTypes.STRING },
    url: DataTypes.STRING,
    status: { type: DataTypes.STRING, default: "pending" },
    amount: { type: DataTypes.DECIMAL, min: 0 },
  },
  {
    // Other model options go here
    timestamps: true,
  }
);

// Payment.sync({ alter: true });
