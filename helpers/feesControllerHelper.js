function getThatStudentExpectedAndOutstandingDues(feesForThatStudent, studentFees) {
  let feesResponseForStudent = {};
  let classFeeDetails = {};
  for (var key in feesForThatStudent.dataValues) {
    if (feesForThatStudent[key] != 0) {
      classFeeDetails[key] = feesForThatStudent[key];
    }
  }

  feesResponseForStudent["classFeesDetails"] = classFeeDetails;
  let dues = {};

  for (var i in classFeeDetails) {
    for (var j in studentFees.dataValues) {
      if (i == j) {
        dues[j] = studentFees.dataValues[j];
      }
    }
  }
  feesResponseForStudent["dues"] = dues;

  return feesResponseForStudent
}

module.exports = {getThatStudentExpectedAndOutstandingDues}
