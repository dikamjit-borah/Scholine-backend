require("dotenv").config();
const cors = require("cors");
const express = require("express");
const serveStatic = require('serve-static');
const multer = require('multer');

const path = require('path');
const mysql= require("mysql2");
const isAuthenticated = require("./handlers/isAuthenticated");

const studentRoutes = require("./routes/studentRouter");
const feesRoutes = require("./routes/feesRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const fs = require('fs');


const config = require("./config/config.json");
const { errorHandler, logError, urlNotFoundError} = require("./handlers/ErrorHandler");

const PORT = process.env.PORT || 8080;

const app = express();




var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(upload.any());
// app.use(express.static('images'));

app.use("/api_v1", authRoutes);



//////////////////////////////////

const storage = multer.diskStorage({
  destination: (req,file,callback) => {
    const s_id= JSON.parse(req.body.studentData).mainData.u_id;
    const dir = path.join(__dirname, `/images/${s_id}`)
    if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
    }
    else {2
      const fileName = file.originalname.split(".")[0];
      
      fs.readdir(dir, (err,files) => {
        files.forEach(file => {
          if(file.split(".")[0] === fileName ) fs.unlinkSync(`${dir}/${file}`);
        })
      })
    }
    callback(null, `./images/${s_id}`);
  },
  filename: (req, file, callback)=> {
      callback(null, file.originalname );
  }
})

let upload = multer({storage})
/////////////////////////////////
//Protected routes
app.use("/api_v1/students", upload.array('file'), studentRoutes);
app.use("/api_v1/fees", feesRoutes);


app.use("/api_v1/images/",serveStatic(path.join(__dirname, 'images')))
//app.use("/api_v1/user", userRoutes)



//error handling middleware
app.use(urlNotFoundError);
app.use(logError);
app.use(errorHandler);



// web/db server status
app.listen(PORT, () => {
  console.log(`Node Server running on port ${PORT}`);

});
