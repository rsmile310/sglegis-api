const multer = require('multer');
const { v4: uuidv4 } = require("uuid");

var DIR = 'uploads/';

exports.setFolder = (folder) => {
    DIR = 'uploads/' + folder
};

exports.storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, DIR);
    },
    filename: (req, file, cb) => {
      // const fileName = file.originalname.toLowerCase().split(' ').join('-');
      const fileExt = file.originalname.split(".")[file.originalname.split(".").length - 1];
      cb(null, uuidv4() + '.' + fileExt);
    }
});

exports.fileUploader = multer({
    storage: this.storage,
    fileFilter: (req, file, cb) => {
        cb(null, true);
    }
});
