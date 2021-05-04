const express = require("express")
const authRouter = express.Router()

const authController = require("../controllers/authController")


// authRouter.post("/signup", authController.viewAllStudentsServiceFunction)
authRouter.post("/login", authController.login)

//authRouter.get("/find_student/:id", authController)

module.exports = authRouter