const { errorGenerator} = require("./../helpers/errorHelper");
const jwt = require('jsonwebtoken');

module.exports = (req,res,next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    //Check if token is not in header
    if(token == null) return errorGenerator(401,'You are not loggedin',next)

    try {
        jwt.verify(token, process.env.JWT_SECRET, (error,payload)=> {
            if(error) return errorGenerator(401,'You are not authorized',next)

            console.log("sapna");
            next();
        });
    }
    catch(error){
        errorGenerator(500,'something is wrong',next);
    }
}
