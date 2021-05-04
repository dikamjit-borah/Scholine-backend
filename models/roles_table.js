'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ROLES_TABLE extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ROLES_TABLE.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ROLES_TABLE',
  });
  return ROLES_TABLE;
};