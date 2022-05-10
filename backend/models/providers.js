const providers = (sequelize, DataTypes) => {
  const providers = sequelize.define( "providers", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: "providers"
  });

  return providers;
};

module.exports = providers;