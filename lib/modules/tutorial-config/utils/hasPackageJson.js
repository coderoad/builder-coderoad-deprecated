"use strict";
var path_1 = require('path');
var node_file_exists_1 = require('node-file-exists');
function hasPackageJson(dir) {
    return node_file_exists_1.default(path_1.join(dir, './package.json'));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = hasPackageJson;
