const express = require("express");
const { orders, buyers, providers } = require("./models");
const sequelize = require('sequelize');


const app = express();
app.use(express.json());
app.listen(3000, () => console.log("ouvindo porta 3000!"));

// Este endpoint usa o método findAll do Sequelize para retorno todos os users.
app.get("/", async (_req, res) => {
  try {
    const user = await orders.findAll({
      attributes: [
        "orderNumber",
        "value",
        "orderStatusBuyer",
        [sequelize.fn("DATE_FORMAT", sequelize.col("emissionDate"), "%d/%m/%Y"), "emissionDate"],
      ],
      include: [
        {
          model: buyers,
          as: "buyer",
          required: false,
          attributes: ["name"],
        },
        {
          model: providers,
          as: "provider",
          required: false,
          attributes: ["name"],
        },
      ],
    });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Algo deu errado" });
  }
});

// ...
