"use strict";
import { Sequelize, DataTypes } from "sequelize";
import sequelize from "./index";

const Cart = sequelize.define(
  "Cart",
  {
    // // Model attributes are defined here
    // id: {
    //   type: DataTypes.UUID,
    //   defaultValue: Sequelize.UUIDV4, // Or Sequelize.UUIDV1
    //   primaryKey: true,
    // },
    // user: {
    //   type: DataTypes.UUID,
    //   references: {
    //     model: sequelize.models.User,
    //     key: "id",
    //   },
    // },
    // product: {
    //   type: DataTypes.STRING,
    //   references: {
    //     model: sequelize.models.Product,
    //     key: "sku",
    //   },
    // },
    qty: { type: DataTypes.INTEGER },
    weight: { type: DataTypes.DECIMAL },
    img: { type: DataTypes.STRING },
    msg: { type: DataTypes.STRING },
    price: { type: DataTypes.DECIMAL },
    active: { type: DataTypes.BOOLEAN, default: true },
  },
  {
    // Other model options go here
    timestamps: true,
  }
);

sequelize.models.User.hasMany(Cart);
Cart.belongsTo(sequelize.models.User);
Cart.belongsTo(sequelize.models.Product);
sequelize.models.Order.hasMany(Cart);
Cart.belongsTo(sequelize.models.Order);

// Cart.sync({ alter: true });
