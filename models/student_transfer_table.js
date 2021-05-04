'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class STUDENT_TRANSFER_TABLE extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  STUDENT_TRANSFER_TABLE.init({
    student_id: DataTypes.INTEGER,
    affiliated_to_college: DataTypes.STRING,
    sub1: DataTypes.STRING,
    sub2: DataTypes.STRING,
    sub3: DataTypes.STRING,
    sub4: DataTypes.STRING,
    sub5: DataTypes.STRING,
    sub6: DataTypes.STRING,
    transfer_certificate_no: DataTypes.STRING,
    date_of_issue: DataTypes.DATE,
    last_attended_school: DataTypes.STRING,
    last_attended_class: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'STUDENT_TRANSFER_TABLE',
  });
  STUDENT_TRANSFER_TABLE.removeAttribute("id")
  return STUDENT_TRANSFER_TABLE;
};