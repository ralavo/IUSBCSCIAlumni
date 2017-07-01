var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');    //json parsing
var mysql = require('mysql');
var multer  = require('multer');            //file uploading
var fs =require('fs');

var index = require('./routes/index');
var alumni = require('./routes/alumni');

var port = 3000;

var app = express();


//******* begining file upload ******/
var DIR = './uploads/';

var upload = multer({dest: DIR});

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://valor-software.github.io');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
 
app.use(multer({
  dest: DIR,
  rename: function (fieldname, filename) {
    return filename + Date.now();
  },
  onFileUploadStart: function (file) {
    console.log(file.originalname + ' is starting ...');
  },
  onFileUploadComplete: function (file) {
    console.log(file.fieldname + ' uploaded to  ' + file.path);
  }
}).single());

app.get('/api', function (req, res) {
  res.end('file catcher example');
});
 
app.post('/api', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      return res.end(err.toString());
    }
 
    res.end('File is uploaded');
  });
});
//******* End file upload ******/


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'client')));
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use('/', index);
app.use('/alumni', alumni);

app.listen(port, function(){
    console.log('Server started on port: '+port);
});
