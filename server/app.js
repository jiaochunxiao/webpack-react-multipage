const path = require('path');
const fs = require('fs-extra');
const express = require('express');

const app = express();

const port = 8088;

app.use('/', express.static(path.join(__dirname, '..', 'dist')));

module.exports.PORT = port;
module.exports.startServer = function(cb) {
    app.listen(port, cb);
}