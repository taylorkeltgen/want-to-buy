const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Category model
class Category extends Model {}

// create fields/columns for Category model
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    label: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    timestamps: false,
<<<<<<< HEAD
    modelName: 'category',
=======
    modelName: "category",
>>>>>>> ffd64fcc442723a312e148f49fc09ecb23bade9a
  }
);

module.exports = Category;
