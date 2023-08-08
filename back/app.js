const express = require('express');

const app = express();
const port = 5000;

app.use(express.static("files"));

var fileupload = require("express-fileupload");
//app.use(fileupload({useTempFiles:true}));

app.use(fileupload());

var cors = require('cors');
app.use(cors());

app.use(express.static('upload_image'));

const send_to_api=require('./send_to_api');

app.post('/upload_file' , (req , res) => {

    console.log(req.files);

    const newpath = __dirname + "/upload_image/";
    const file = req.files.myFile;
    const now = new Date().getTime();

    const filename =  now + file.name ;
   
    file.mv(`${newpath}${filename}`, (err) => {

      send_to_api(`${newpath}${filename}`,filename );

      if (err) {
        res.status(500).send({ message: "File upload failed", code: 200 });
      }
    });

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})