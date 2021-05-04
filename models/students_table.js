'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class STUDENTS_TABLE extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  STUDENTS_TABLE.init({
    u_id: DataTypes.INTEGER,
    admission_no: DataTypes.INTEGER,
    date_of_admission: DataTypes.DATE,
    roll_no: DataTypes.INTEGER,
    student_name: DataTypes.STRING,
    birth_date: DataTypes.DATE,
    no_of_transfer_recipient:DataTypes.INTEGER,
    class: DataTypes.STRING,
    section: DataTypes.STRING,
    caste: DataTypes.STRING,
    religion: DataTypes.STRING,
    gender: DataTypes.STRING,
    father_name: DataTypes.STRING,
    father_occupation: DataTypes.STRING,
    mother_name: DataTypes.STRING,
    mother_occupation: DataTypes.STRING,
    address: DataTypes.STRING,
    state: DataTypes.STRING,
    district: DataTypes.STRING,
    pin: DataTypes.INTEGER,
    contact_no_1: DataTypes.STRING,
    contact_no_2: DataTypes.STRING,
    is_transferred_student: DataTypes.INTEGER,
    dp:DataTypes.STRING,
    doc1:DataTypes.STRING,
    doc2:DataTypes.STRING,
    doc3:DataTypes.STRING,
    doc4:DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'STUDENTS_TABLE',
  });

  STUDENTS_TABLE.removeAttribute("id")
  return STUDENTS_TABLE;
};