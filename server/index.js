'use strict'

const fs = require('fs')
const path = require('path')
const http2 = require('http2')
const helper = require('./helper')

const { HTTP2_HEADER_PATH } = http2.constants
const PORT = process.env.PORT || 3000
const PUBLIC_PATH = path.join(__dirname, './public')
const publicFiles = helper.getFiles(PUBLIC_PATH)
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
  console.log(req.url);
  const reqPath = req.url === '/' ? '/index.html' : req.url
  let file = publicFiles.get(reqPath)
  
  // File not found
  if (!file) {
    file = helper.getSpecificFile(path.join(PUBLIC_PATH, reqPath));
    if(!file) {
        file = publicFiles.get('/index.html')
    }
  }

  // Push with index.html
  if (reqPath === '/index.html') {
    push(res.stream, '/vendor.js')
    push(res.stream, '/bundle.js')
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
