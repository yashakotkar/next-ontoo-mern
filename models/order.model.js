"use strict";
import { DataTypes } from "sequelize";
import sequelize from "./index";

const Order = sequelize.define(
  "Order",
  {
    // Model attributes are defined here
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true,
    // },
    // user: {
    //   type: DataTypes.UUID,
    //   references: {
    //     model: sequelize.models.User,
    //     key: "id",
    //   },
    // },
    // payment: {
    //   type: DataTypes.UUID,
    //   references: {
    //     model: sequelize.models.Payment,
    //     key: "id",
    //   },
    // },
    // address: {
    //   type: DataTypes.UUID,
    //   references: {
    //     model: sequelize.models.Address,
    //     key: "id",
    //   },
    // },
    status: { type: DataTypes.STRING, default: "pending", allowNull: false },
    invoice: { type: DataTypes.STRING },
    deliveryDate: { type: DataTypes.DATEONLY },
    deliveryTime: { type: DataTypes.STRING },
    promoCode: { type: DataTypes.STRING },
    subTotal: { type: DataTypes.INTEGER },
    netTotal: { type: DataTypes.INTEGER },
    discount: { type: DataTypes.INTEGER },
    shipping: { type: DataTypes.INTEGER },
  },
  {
    // Other model options go here
    timestamps: true,
  }
);

Order.belongsTo(sequelize.models.User);
Order.belongsTo(sequelize.models.Address);
Order.belongsTo(sequelize.models.Payment);

try {
  // Order.sync({ alter: true });
} catch (error) {
  console.log(error);
}
