const studentService = require("../services/studentServices");
const feesService = require("../services/feesServices");

const db = require("../models/index");
const { errorGenerator } = require("../helpers/errorHelper");


exports.addStudentServiceFunction = async (req, res, next) => {
  const { mainData,transferDetailData}  = JSON.parse(req.body.studentData);
  console.log(transferDetailData);
  let createdStudent, createdStudentFeeEntry;
  let transaction
  try {
    transaction = await db.sequelize.transaction();
    const student = await studentService.findStudentById(mainData.u_id);
    if(student)
      errorGenerator(402, "Student Id already exist!!!", next);

    createdStudent = await studentService.addStudent(mainData, transaction);
    //console.log(req.body.studentData);
    
    createdStudentFeeEntry = await feesService.addInitialFeesEntry(
      mainData,
      transaction
    );

    if(mainData.is_transferred_student){
      addTransferDetail = await studentService.addTransferDetail(transferDetailData, transaction);
    }

    await transaction.commit();

    res.status(201).send(
      `Student ${JSON.stringify(
        createdStudent
      )} created successfully and ${JSON.stringify(createdStudentFeeEntry)}`
    );
  } catch (err) {
    const error = new Error(`Something is wrong => ${err}`);
    error.status = 500;
    return next(error);
  }  
};

exports.viewAllStudentsServiceFunction = async (req, res, next) => {
  var allStudentsObj;
  try {
    allStudentsObj = await studentService.viewAllStudents();
  } catch (err) {
    const error = new Error(`Something is wrong => ${err}`);
    error.status = 500;
    return next(error);
  }

  

  res.send(allStudentsObj);
};

exports.findStudentByIdServiceFunction = async (req, res, next) => {
  var studentFoundObj;
  let requestedStudentId = req.params["id"];
  try {
    studentFoundObj = await studentService.findStudentById(
      requestedStudentId
    );

    if (!studentFoundObj) {
      const error = new Error(`No student found with ${requestedStudentId}`);
      error.status = 404;
      return next(error);
    }
    
    let transferDetail=null;
    if(studentFoundObj.is_transferred_student ) {
      transferDetail = await studentService.getStudentTransferDetailById(requestedStudentId);
    }

    res.json({ mainData: studentFoundObj, transferDetailData:transferDetail });

  } catch (err) {
    const error = new Error(`Something is wrong => ${err}`);
    error.status = 500;
    return next(error);
  }

};


exports.updateStudentInfo = async (req, res, next) => { 
  const { mainData,transferDetailData}  = JSON.parse(req.body.studentData);
  console.log(req.body);
  console.log("GGGGGGGGG",mainData)
 
  let transaction
  try {
    transaction = await db.sequelize.transaction();
    const updatedStudent = await studentService.updateStudentInfo(mainData, transaction);

    if(mainData.is_transferred_student){
      const updatedTransferDetail = await studentService.updateTransferDetail(transferDetailData, transaction);
    }

    await transaction.commit();

    res.status(201).send(
      `Student ${JSON.stringify(
        updatedStudent
      )} updated successfully}`
    );

  } catch (err) {
    const error = new Error(`Something is wrong => ${err}`);
    error.status = 500;
    return next(error);
  }
}


exports.searchStudents = async (req, res, next) => { 
  const { searchTerm, searchType }  = req.body;
  try {
    const foundStudents = await studentService.searchStudents(searchTerm, searchType);
    res.status(200).json({data:foundStudents});

  } catch (err) {
    const error = new Error(`Something is wrong => ${err}`);
    error.status = 500;
    return next(error);
  }
}
// exports.findStudentByRoll = async(req, res) =>{
//     var fetchedStudent = await addStudentService
// }
