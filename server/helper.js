'use strict'

const fs = require('fs')
const path = require('path')
const mime = require('mime')

function getFiles (baseDir) {
  const files = new Map()

  fs.readdirSync(baseDir).forEach((fileName) => {
    const filePath = path.join(baseDir, fileName)
    const fileDescriptor = fs.openSync(filePath, 'r')
    const stat = fs.fstatSync(fileDescriptor)
    const contentType = mime.lookup(filePath)

    files.set(`/${fileName}`, {
      fileDescriptor,
      headers: {
        'Cache-Control': 'max-age=20, public',
        'content-length': stat.size,
        'last-modified': stat.mtime.toUTCString(),
        'content-type': contentType
      }
    })
  })

  return files
}

function getSpecificFile(filePath) {
    try{
        const fileDescriptor = fs.openSync(filePath, 'r')
        const stat = fs.fstatSync(fileDescriptor)
        const contentType = mime.lookup(filePath)

        return {
            fileDescriptor,
            headers: {
                'content-length': stat.size,
                'last-modified': stat.mtime.toUTCString(),
                'content-type': contentType
            }
        };
    } catch (e) {
        return null;
    }
    
    return null;    
}

function getDonutFiles(baseDir) {
  const files = new Map()
  const relativePath = '/assets/json/donuts';
  const actualPath = path.join(baseDir, relativePath);
  
    fs.readdirSync(actualPath).forEach((fileName) => {
      const filePath = path.join(actualPath, fileName)
      const fileDescriptor = fs.openSync(filePath, 'r')
      const stat = fs.fstatSync(fileDescriptor)
      const contentType = mime.lookup(filePath)
  
      files.set(`${relativePath}/${fileName}`, {
        fileDescriptor,
        headers: {
          'content-length': stat.size,
          'last-modified': stat.mtime.toUTCString(),
          'content-type': contentType
        }
      })
    })
    return files
}

function mapDonuts(url) {
  const regEx = new RegExp('/assets/json/donuts/(.*).json', 'g')
  const match = regEx.exec(url);
  let donutInfo = {}, page;

  if(match) {
    page = Number(match[1]);
    donutInfo.currentPath = `/assets/json/donuts/${page}.json`;
    donutInfo.nextPath = `/assets/json/donuts/${page+1}.json`;
    return donutInfo;
  }
  return null;
}

module.exports = {
  getFiles,
  getSpecificFile,
  getDonutFiles,
  mapDonuts
}
