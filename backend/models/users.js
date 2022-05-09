const users = (sequelize, DataTypes) => {
  const users = sequelize.define("users", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    mobile: DataTypes.STRING,
    departament: DataTypes.STRING,
    verificationCode: DataTypes.STRING,
    emailChecked: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    cashforceAdm: DataTypes.INTEGER
  });

  return users;
};

module.exports = users;