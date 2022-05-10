const orders = require("./orders");

module.exports = (sequelize, DataTypes) => {
  const buyers = sequelize.define(
    "buyers",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      name: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: "buyers",
    }
  );

  buyers.associate = (models) => {
    buyers.hasMany(models.orders, {
      foreignKey: "buyerId",
      as: "orders",
    });
  }

    return buyers;
};
