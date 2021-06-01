import sequelize from "../models";
import User from "../models/user.model";
import Operation from "../models/operation.model";
import Payment from "../models/payment.model";
import Address from "../models/address.model";
import Category from "../models/user.model";
import Menu from "../models/menu.model";
import PromoCode from "../models/promoCode.model";
import Location from "../models/location.model";
import PinCode from "../models/pinCode.model";
import Product from "../models/product.model";
import ProductMenu from "../models/productMenu.model";
import ProductLocation from "../models/productLocation.model";
import Order from "../models/order.model";
import Cart from "../models/cart.model";
import Review from "../models/review.model";
import Setting from "../models/setting.model";
import UserOTP from "../models/userOTP.model";
import Home from "../models/home.models";

export default async () => {
  try {
    // await sequelize.sync();
  } catch (error) {
    console.error(error);
  }
};
