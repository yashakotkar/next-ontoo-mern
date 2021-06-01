"use strict";
import { DataTypes } from "sequelize";
import sequelize from "./index";
import Category from "./category.model";

const PromoCode = sequelize.define(
  "PromoCode",
  {
    // Model attributes are defined here

    name: { type: DataTypes.STRING, primaryKey: true },
    type: { type: DataTypes.STRING, default: "product" },
    discount: { type: DataTypes.DECIMAL, min: 0, max: 100 },
    maxDiscount: { type: DataTypes.DECIMAL, min: 0 },
    minOrderAmount: { type: DataTypes.DECIMAL, min: 0 },
    validTill: { type: DataTypes.DATE, default: new Date() },
    uses: { type: DataTypes.INTEGER, min: 1, default: 1 },
    products: { type: DataTypes.JSON },
    categories: { type: DataTypes.JSON },
    menus: { type: DataTypes.JSON },
    desc: { type: DataTypes.STRING },
  },
  {
    // Other model options go here
    timestamps: true,
  }
);

// PromoCode.sync({ alter: true });
