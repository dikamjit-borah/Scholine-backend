const express = require("express")
const studentRouter = express.Router()

const studentController = require("../controllers/studentController")


studentRouter.get("/", studentController.viewAllStudentsServiceFunction)
studentRouter.post("/add", studentController.addStudentServiceFunction)
studentRouter.get("/:id", studentController.findStudentByIdServiceFunction)
studentRouter.post("/update", studentController.updateStudentInfo)
studentRouter.post("/search", studentController.searchStudents)


//router.get("/find_student/:id", studentController)

module.exports = studentRouter