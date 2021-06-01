"use strict";
import bcrypt from "bcrypt";
import { Sequelize, DataTypes } from "sequelize";
import sequelize from "./index";

const saltRounds = 10;

const User = sequelize.define(
  "User",
  {
    // Model attributes are defined here
    img: DataTypes.STRING(300),
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    phoneNumber: { type: DataTypes.STRING, unique: true, allowNull: true },
    email: {
      type: DataTypes.STRING,
      isEmail: true,
      unique: true,
      allowNull: true,
    },
    verified: { type: DataTypes.BOOLEAN, defaultValue: false },
    gender: DataTypes.STRING(1),
    salt: DataTypes.STRING,
    promoCode: DataTypes.JSON,
    role: { type: DataTypes.STRING, default: "customer" },
    googleId: DataTypes.STRING,
  },
  {
    // Other model options go here
    instanceMethods: {
      setToken: () => {
        //TODO: make it later
      },
      getToken: () => {
        return {
          id: this.getDataValue("id"),
          phoneNumber: this.getDataValue("phoneNumber"),
          email: this.getDataValue("email"),
          verified: this.getDataValue("verified"),
          role: this.getDataValue("role"),
        };
      },
    },
    timestamps: true,
  }
);

(User.prototype.validatePassword = (user, password) => {
  const hash = bcrypt.hashSync(password, saltRounds);
  console.log("pass", password);
  console.log("pass", user.password);

  return bcrypt.compareSync(password, user.password);
}),
  User.addHook("beforeCreate", (User, options) => {
    if (!User.googleId) {
      User.password = bcrypt.hashSync(User.password, saltRounds);
    }
  });

// User.sync();
