const feesService = require("../services/feesServices");
const studentService = require("../services/studentServices");
const helper = require("../helpers/feesControllerHelper");
const { errorGenerator } = require("../helpers/errorHelper");

exports.getStudentFeesDetailsServiceFunction = async (req, res, next) => {
  let feesForThatStudent;
  let studentFees;
  let studentName, studentRollNo;

  try {
    studentFees = await feesService.getStudentFeesDetail(req.params["id"]);

    const studentDetails = await studentService.findStudentById(
      req.params["id"]
    );

    studentName = studentDetails.dataValues.student_name;
    studentRollNo = studentDetails.dataValues.roll_no;

    const studentClass = studentDetails.dataValues.class;

    feesForThatStudent = await feesService.getFeesForThatStudent(studentClass);
  } catch (err) {
    const error = new Error(`Something is wrong => ${err}`);
    error.status = 500;
    return next(error);
  }

  let dataResponse;
  try {
    dataResponse = helper.getThatStudentExpectedAndOutstandingDues(
      feesForThatStudent,
      studentFees
    );
  } catch (err) {
    const error = new Error(`Something's wrong => ${err}`);
    error.status = 500;
    return next(error);
  }
  dataResponse = { ...dataResponse, studentName, studentRollNo };
  res.send({ dataResponse });
};

exports.updateStudentFeesServiceFunction = async (req, res, next) => {
  let studentFees;
  let studentId;
  let reqBody = req.body;
  let isUpdated;
  const feeType = reqBody.feesData.type;
  console.log(feeType);

  try {
    studentId = reqBody.feesData.s_id;
    studentFees = await feesService.getStudentFeesDetail(studentId);

    if (studentFees == null) {
      errorGenerator(404, "Student not found!!!", next);
    }

    switch (feeType) {
      case "monthly":
        const monthIndex = reqBody.feesData.data.month;
        let previousMonthly = studentFees.dataValues.monthly;
        previousMonthly = JSON.parse(previousMonthly);
        console.log(previousMonthly);
        previousMonthly[monthIndex] = 1;
        console.log(previousMonthly);
        try {
          isUpdated = await feesService.updateStudentMonthlyFees(
            previousMonthly,
            studentId
          );
        } catch (err) {
          const error = new Error(`Something is wrong => ${err}`);
          error.status = 500;
          return next(error);
        }
        break;
      case "admission":
        console.log("inside admission", studentId);
        isUpdated = await feesService.updateStudentAdmissionFees(studentId);
        break;
      default:
        return errorGenerator(500, "Fee type is wrong", next);

      //const reg = req.feesData.data.
    }

    //studentFees = await feesService.updateStudentFees(req.body);
  } catch (err) {
    const error = new Error(`Something is wrong => ${err}`);
    error.status = 500;
    return next(error);
  }

  res.json({ message: "Fees updated" });
};
