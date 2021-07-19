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
      const fileName = file.originalname.toLowerCase().split(' ').join('-');
      cb(null, uuidv4() + '-' + fileName)
    }
});

exports.fileUploader = multer({
    storage: this.storage,
    fileFilter: (req, file, cb) => {
        cb(null, true);
    }
});
