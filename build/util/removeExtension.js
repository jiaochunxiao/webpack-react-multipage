/**
 * 提取文件名
 * @param {string} filename 
 */
module.exports = function (filename){
    return filename.substr(0, filename.lastIndexOf('.'))||filename
}