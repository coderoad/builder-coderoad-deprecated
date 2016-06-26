"use strict";
var path_1 = require('path');
var fs_1 = require('fs');
var node_file_exists_1 = require('node-file-exists');
function loadRunner(dir, name) {
    var packagePath = path_1.join(dir, 'node_modules', name);
    if (!node_file_exists_1.default(packagePath)) {
        console.log("Runner " + name + " not installed");
        return false;
    }
    try {
        var pj = JSON.parse(fs_1.readFileSync(path_1.join(packagePath, 'package.json'), 'utf8'));
        return require(name);
    }
    catch (e) {
        console.log(e);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = loadRunner;
