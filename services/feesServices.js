const { FEES_LOG_TABLE } = require("../models/index");
const { STUDENTS_TABLE } = require("../models/index");
const { FEE_STRUCTURE_TABLE } = require("../models/index");

exports.addInitialFeesEntry = async (data, transaction) => {
  var monthly_fees = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const fee_entry = await FEES_LOG_TABLE.create(
    {
      student_id: data.u_id,
      monthly: JSON.stringify(monthly_fees),
      admission: 0
    },
    { transaction }
  );
  return fee_entry;
};

exports.getStudentFeesDetail = async (s_id) => {
  const studentFees = await FEES_LOG_TABLE.findOne({
    where: {
      student_id: s_id,
    },
  });

  //console.log(studentFees);

  return studentFees;
};

exports.getFeesForThatStudent = async (s_class) => {
  const feesForThatStudent = await FEE_STRUCTURE_TABLE.findOne({
    where: {
      class: s_class,
    },
  });
  return feesForThatStudent;
};

exports.updateStudentMonthlyFees = async (previousMonthly, studentId) => {
  const isUpdated = await FEES_LOG_TABLE.update(
    {
      monthly: JSON.stringify(previousMonthly),
    
    },
    {
      where: {
        student_id: studentId,
      },
    }
  );

  return "Fees Updated";
};


exports.updateStudentAdmissionFees = async (studentId) => {
 
  const isUpdated = await FEES_LOG_TABLE.update(
    {
      admission:"1"
    },
    {
      where: {
        student_id: studentId,
      },
    }
  );

  return "Fees Updated";
};
