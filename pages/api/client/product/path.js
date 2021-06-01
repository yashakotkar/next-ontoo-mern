import sequelize from "../../../../models";
import connectDB from "../../../../utils/connectDB";

connectDB();

export default (req, res) =>
  sequelize.models.Product.findAll({
    attribute: ["sku"],
  })
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(500).send(err));
