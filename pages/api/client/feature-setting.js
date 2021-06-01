import sequelize from "../../../models";
import connectDB from "../../../utils/connectDB";

connectDB();

export default (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      return homeGet(req, res);
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

const homeGet = async (req, res) => {
  try {
    // Get data from your database
    const featureSetting = await sequelize.models.Setting.findOne({
      where: { id: 1 },
    });

    const homeBlocks = await sequelize.models.Home.findAll({
      include: [
        {
          model: sequelize.models.Menu,
          include: [
            {
              model: sequelize.models.Product,
              order: [{ rating: "ASC" }],
              pageLimit: 5,
            },
          ],
        },
        {
          model: sequelize.models.Category,
          include: [
            {
              model: sequelize.models.Product,
              order: [{ rating: "ASC" }],
              pageLimit: 5,
            },
          ],
        },
      ],
    });
    return res.status(200).send({ homeBlocks, featureSetting });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
