"use strict";
import { DataTypes } from "sequelize";
import sequelize from "./index";
import _ from "lodash";

const Product = sequelize.define(
  "Product",
  {
    // Model attributes are defined here

    sku: { type: DataTypes.STRING, primaryKey: true },
    img: { type: DataTypes.JSON },
    name: { type: DataTypes.STRING },
    // category: {
    //   type: DataTypes.STRING,
    //   references: { model: sequelize.models.Category, key: "name" },
    // },
    price: { type: DataTypes.DECIMAL, min: 0 },
    mrp: { type: DataTypes.DECIMAL, min: 0 },
    discount: { type: DataTypes.DECIMAL, min: 0, max: 100 },
    rating: { type: DataTypes.INTEGER, min: 0, max: 5, default: 0 },
    brief: { type: DataTypes.STRING(200) },
    desc: { type: DataTypes.STRING(5000) },
    prolongation: { type: DataTypes.INTEGER, min: 0 },
    qtyInput: { type: DataTypes.BOOLEAN, default: false },
    qtyMax: { type: DataTypes.INTEGER, min: 1 },
    msgInput: { type: DataTypes.BOOLEAN, default: false },
    msgLength: { type: DataTypes.INTEGER, min: 0 },
    weightInput: { type: DataTypes.BOOLEAN, default: false },
    weightList: { type: DataTypes.JSON },
    imgInput: { type: DataTypes.BOOLEAN, default: false },
  },
  { timestamps: true }
);

Product.belongsTo(sequelize.models.Category);
sequelize.models.Category.hasMany(Product);
sequelize.models.Menu.belongsToMany(Product, { through: "ProductMenus" });

Product.belongsToMany(sequelize.models.Menu, { through: "ProductMenus" });

sequelize.models.Location.belongsToMany(Product, {
  through: "ProductLocations",
});

Product.belongsToMany(sequelize.models.Location, {
  through: "ProductLocations",
});

Product.addHook("beforeCreate", (p, options) => {
  // User.password = bcrypt.hashSync(User.password, saltRounds);
  p.sku = _.upperCase(
    `PROD${_.upperCase(p.CategoryName.substring(0, 2))}${_.upperCase(
      p.name.substring(0, 3)
    )}${Math.floor(Math.random() * 1000)}`
  );
});

// sequelize.models.Menu.sync({ alter: true });
// Product.sync({ alter: true });
