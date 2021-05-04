const { USERS_TABLE } = require("../models/index");
const { errorGenerator } = require("../helpers/errorHelper");

exports.getUserByEmail = async (email, next) => {
  let userDetails;
  try {
    userDetails = await USERS_TABLE.findOne({
        where:{
            email: email,
        }
      
    });
  } catch (error) {
    return errorGenerator(404, "User not found =>" + error, next);
  }

  return userDetails;
};
