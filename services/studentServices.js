const db = require('../models/index');
const { STUDENTS_TABLE,STUDENT_TRANSFER_TABLE } = require("../models/index");
const Op = db.Sequelize.Op;


exports.addStudent = async (data, transaction) => {
  const student1 = await STUDENTS_TABLE.create(
    {
    ...data
    },
    { transaction }
  );

  console.log(data);

  return { student1 };
};

exports.viewAllStudents = async () => {
  const student = await STUDENTS_TABLE.findAll();

  console.log("Viewing all student : from services");
  return student;
};

exports.findStudentById = async (id) => {
 
    const student = await STUDENTS_TABLE.findOne({
      where: {
        u_id: id,
      },
    });
    return student;
 
};

exports.addTransferDetail = async (data, transaction) => {
  const student1 = await STUDENT_TRANSFER_TABLE.create(
    {
    ...data
    },
    { transaction }
  );

  return { student1 };
};

exports.getStudentTransferDetailById = async (student_id) => {
 
  const student = await STUDENT_TRANSFER_TABLE.findOne({
    where: {
      student_id
    },
  });
  return student;

};


exports.updateStudentInfo = async (data, transaction) => {
  const isUpdated = await STUDENTS_TABLE.update(
    {
      ...data
    },
    {
      where: {
        u_id: data.u_id,
      },
    },
    { transaction }
  );

  return "Student Updated";
};


exports.updateTransferDetail = async (data, transaction) => {
  const isUpdated = await STUDENT_TRANSFER_TABLE.update(
    {
      ...data
    },
    {
      where: {
        student_id: data.student_id,
      },
    },
    { transaction }
  );

  return "Student Updated";
};


exports.searchStudents = async (searchTerm, searchType) => {
 
  const student = await STUDENTS_TABLE.findAll({
    where: {
      [searchType]: { [Op.like]: `%${searchTerm}%` }
    },
  });
  return student;

};