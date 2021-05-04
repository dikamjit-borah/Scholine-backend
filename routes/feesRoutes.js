const express = require("express")
const feesRouter = express.Router()

const feesController = require("../controllers/feesController")


//feesRouter.get("/students", studentController.viewAllStudentsServiceFunction)
//feesRouter.post("/students/add", studentController.addStudentServiceFunction)
feesRouter.get("/:id", feesController.getStudentFeesDetailsServiceFunction)

feesRouter.post("/update", feesController.updateStudentFeesServiceFunction)





//feesRouter.get("/find_student/:id", studentController)

module.exports = feesRouter