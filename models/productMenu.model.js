"use strict";
import { DataTypes } from "sequelize";
import sequelize from "./index";

const ProductMenu = sequelize.define(
  "ProductMenu",
  {
    // Model attributes are defined here
    // menu: {
    //   type: DataTypes.UUID,
    //   references: { model: sequelize.models.Menu, key: "id" },
    // },
    // product: {
    //   type: DataTypes.STRING,
    //   references: { model: sequelize.models.Product, key: "sku" },
    // },
  },
  {
    // Other model options go here
    timestamps: true,
  }
);
ProductMenu.belongsTo(sequelize.models.Menu);
ProductMenu.belongsTo(sequelize.models.Product);
sequelize.models.Product.hasMany(sequelize.models.ProductMenu);
sequelize.models.Menu.hasMany(sequelize.models.ProductMenu);
