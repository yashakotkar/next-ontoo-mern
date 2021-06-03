import sequelize from "../../../models/index";
import connectDB from "../../../utils/connectDB";

connectDB();

export default (req, res) =>
  sequelize.models.Location.findAll()
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(500).send(err));
