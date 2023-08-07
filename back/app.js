const express = require('express');
const path  = require('path')

const app = express();
const port = 5000;

//const upload = require('./upload');
//path.join('/', 'users');

var fs = require("fs");

app.use(express.json());

var cors = require('cors');
app.use(cors());


var fileupload = require("express-fileupload");
app.use(fileupload());

app.use(express.static('upload_image'));


app.post('/upload_file' , (req , res) => {

    console.log(req.files);

    // const tempPath = req.files.tempFilePath;
    // const targetPath = path.join(__dirname, "./upload_image/image.png");

    // console.log(tempPath);
    // console.log(targetPath);

    // if (path.extname(req.files.originalname).toLowerCase() === ".png") {
    //   fs.rename(tempPath, targetPath, err => {
    //     if (err) return handleError(err, res);

    //     res
    //       .status(200)
    //       .contentType("text/plain")
    //       .end("File uploaded!");
    //   });
    // }

     res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})