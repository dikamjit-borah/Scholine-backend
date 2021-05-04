const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const studentService = require("../services/studentServices");

const { errorGenerator } = require("./../helpers/errorHelper");

const db = require("../models/index");

const userService = require("../services/userServices");

// exports.signup = async (req,res) => {

//     try{
//         let { name,password }=req.body;
//         if(!name && ! password) {
//             const error = new Error(`Something is wrong => ${err}`);
//             error.status = 500;
//             return next(error);
//         }

//          const salt =await bcrypt.genSalt(10);
// 	     const hass_password =await bcrypt.hash(password, salt);

//     }catch(err) {

//     }
// }

exports.login = async (req, res, next) => {
  try {
    let { email, password } = req.body;
    if (!email && !password) {
      const error = new Error(`Something is wrong => ${err}`);
      error.status = 500;
      return next(error);
    }

    // If user exist in db
    let user = true;
    user = await userService.getUserByEmail(email, next);

    if (!user) return errorGenerator(401, "Email incorrect", next);
    console.log(user);

   // const matchPassword = true;
    const matchPassword = await bcrypt.compare(password.toString(), user.dataValues.password);
    console.log("enei");
    if (!matchPassword) return errorGenerator(401, "Password Incorrect", next);

    const accessToken = jwt.sign({ data: "userData" }, process.env.JWT_SECRET);

    res.json({ token: accessToken });
  } catch (err) {
    errorGenerator(500, "something is wrong", next);
  }
};
