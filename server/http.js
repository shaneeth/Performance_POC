'use strict'

var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();

const PUBLIC_PATH = path.join(__dirname, './public')

//app.use(express.static('public'));

app.all('*', function (req, res) {
   console.log(req.path);
   let reqPath = req.path === '/' ? '/index.html' : req.path
   let absolutePath = path.join(PUBLIC_PATH, reqPath);
   fs.access(absolutePath, fs.constants.R_OK, function(error) {
     if(error) {
      res.sendFile(path.join(PUBLIC_PATH, '/index.html'));            
     } else {
      res.sendFile(absolutePath);     
     }
   })
})

var server = app.listen(3100, function () {
  var port = server.address().port
  console.log("Example app listening at %s", port)

})