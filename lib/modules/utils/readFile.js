"use strict";
var fs_1 = require('fs');
var path_1 = require('path');
var node_file_exists_1 = require('node-file-exists');
function readFile(dir, file) {
    var pathToFile = path_1.join(dir, file);
    if (!node_file_exists_1.default(pathToFile)) {
        return false;
    }
    try {
        return JSON.parse(fs_1.readFileSync(pathToFile, 'utf8'));
    }
    catch (e) {
        return null;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = readFile;
