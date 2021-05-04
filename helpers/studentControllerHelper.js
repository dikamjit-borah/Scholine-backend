const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req,file,callback) => {
        callback(null, './images');
    },
    filename: (req, file, callback)=> {
        callback(null, file.originalname );
    }
})

const uploadFiles = multer({storage});

module.exports = {
    uploadFiles
}