'use strict'

const fs = require('fs')
const path = require('path')
const http2 = require('http2')
const helper = require('./helper')

const { HTTP2_HEADER_PATH } = http2.constants
const PORT = process.env.PORT || 3200
const PUBLIC_PATH = path.join(__dirname, './public2')
const publicFiles = helper.getFiles(PUBLIC_PATH)
const donutFiles = helper.getDonutFiles(PUBLIC_PATH)
const server = http2.createSecureServer({
  cert: fs.readFileSync(path.join(__dirname, './localhost-cert.pem')),
  key: fs.readFileSync(path.join(__dirname, './localhost-key.pem'))
}, onRequest)

// Push file
function push (stream, path) {
  const file = publicFiles.get(path)

  if (!file) {
    return
  }

  stream.pushStream({ [HTTP2_HEADER_PATH]: path }, (pushStream) => {
    pushStream.respondWithFD(file.fileDescriptor, file.headers)
  })
}

// Request handler
function onRequest (req, res) {
  console.log('HTTP2 - ', req.url);
  let file, nextFile;
  const donutMap = helper.mapDonuts(req.url);
  if(donutMap) {
    file = donutFiles.get(donutMap.currentPath);
    nextFile = donutFiles.get(donutMap.nextPath);
    if(nextFile) {
      res.stream.pushStream({ [HTTP2_HEADER_PATH]: donutMap.nextPath }, (pushStream) => {
        pushStream.respondWithFD(nextFile.fileDescriptor, nextFile.headers)
      })
    } 
    res.stream.respondWithFD(file.fileDescriptor, file.headers)
    return;    
  }
  let reqPath = req.url === '/' ? '/index.html' : req.url
  file = publicFiles.get(reqPath)
  
  // File not found
  if (!file) {
    file = helper.getSpecificFile(path.join(PUBLIC_PATH, reqPath));
    if(!file) {
        reqPath = '/index.html';
        file = publicFiles.get(reqPath);
    }
  }

  // Push with index.html
  if (reqPath === '/index.html') {
    push(res.stream, '/vendor.js')
    push(res.stream, '/bundle.js')
    push(res.stream, '/style.css')
  }

  // Serve file
  res.stream.respondWithFD(file.fileDescriptor, file.headers)
}

server.listen(PORT, (err) => {
  if (err) {
    console.error(err)
    return
  }

  console.log(`Server listening on ${PORT}`)
})
