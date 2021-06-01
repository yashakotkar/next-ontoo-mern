"use strict";
import { DataTypes } from "sequelize";
import sequelize from "./index";

const ProductLocation = sequelize.define(
  "ProductLocation",
  {
    // Model attributes are defined here
    // city: {
    //   type: DataTypes.STRING,
    //   references: { model: sequelize.models.Location, key: "city" },
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

ProductLocation.belongsTo(sequelize.models.Location);
ProductLocation.belongsTo(sequelize.models.Product);
sequelize.models.Product.hasMany(sequelize.models.ProductLocation);

// ProductLocation.sync();
