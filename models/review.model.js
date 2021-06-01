"use strict";
import { DataTypes } from "sequelize";
import sequelize from "./index";

const Review = sequelize.define(
  "Review",
  {
    // Model attributes are defined here
    rating: { type: DataTypes.INTEGER, min: 0, max: 5 },
    review: { type: DataTypes.STRING },
    // user: {
    //   type: DataTypes.UUID,
    //   references: { model: sequelize.models.User, key: "id" },
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

Review.belongsTo(sequelize.models.User);
sequelize.models.User.hasMany(Review);
Review.belongsTo(sequelize.models.Product);
sequelize.models.Product.hasMany(Review);

// Review.sync();
