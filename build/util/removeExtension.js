module.exports = function (filename){
    return filename.substr(0, filename.lastIndexOf('.'))||filename
}