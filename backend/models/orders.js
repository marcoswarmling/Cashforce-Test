module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define(
    "orders",
    {
      buyerId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        references: { model: "buyers", key: "id" },
      },
      providerId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: { model: "providers", key: "id" },
      },
      orderNumber: DataTypes.INTEGER,
      emissionDate: DataTypes.DATEONLY,
      value: DataTypes.INTEGER,
      orderStatusBuyer: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      tableName: "orders",
    }
  );

  orders.associate = (models) => {
    orders.belongsTo(models.buyers, {
      foreignKey: "",
      as: "buyer",
    });
    orders.belongsTo(models.providers, {
      foreignKey: "",
      as: "provider",
    });
  };

  return orders;
};
