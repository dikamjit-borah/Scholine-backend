'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FEE_STRUCTURE_TABLE extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  FEE_STRUCTURE_TABLE.init({
    class: DataTypes.STRING,
    admission: DataTypes.INTEGER,
    monthly: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'FEE_STRUCTURE_TABLE',
  });
  FEE_STRUCTURE_TABLE.removeAttribute("id")
  return FEE_STRUCTURE_TABLE;
};