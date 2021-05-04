'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FEES_LOG_TABLE extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  FEES_LOG_TABLE.init({
    student_id: DataTypes.INTEGER,
    admission: DataTypes.INTEGER,
    monthly: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'FEES_LOG_TABLE',
  });

  FEES_LOG_TABLE.removeAttribute("id")
  return FEES_LOG_TABLE;
};