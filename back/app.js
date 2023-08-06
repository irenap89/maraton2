const express = require('express');
const app = express();
const port = 5000;
var fs = require("fs");
var cors = require('cors');
app.use(cors());

var fileupload = require("express-fileupload");
app.use(fileupload());


app.use(express.static('public'));


app.post('/upload_file', (req , res) => {

    console.log(req.files);

     res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})