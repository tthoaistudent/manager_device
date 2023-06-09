module.exports = (sequelize, DataTypes) => {
  const Device = sequelize.define(
    "Device",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: true,
      },
      code: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.FLOAT,
      },
      config: {
        type: DataTypes.STRING,
      },
      parent_id: {
        type: DataTypes.INTEGER,
      },
      user_id: {
        type: DataTypes.INTEGER,
      },
      is_active: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      deletedAt: "deletedAt",
      paranoid: true,
    }
  );

  return Device;
};
