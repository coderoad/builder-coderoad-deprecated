"use strict";
var path_1 = require('path');
var fs_1 = require('fs');
var node_file_exists_1 = require('node-file-exists');
var sort_package_json_1 = require('sort-package-json');
function readPackageJson(dir) {
    var pathToPJ = path_1.join(dir, './package.json');
    if (!node_file_exists_1.default(pathToPJ)) {
        return false;
    }
    try {
        return JSON.parse(fs_1.readFileSync(pathToPJ, 'utf8'));
    }
    catch (e) {
        return null;
    }
}
exports.readPackageJson = readPackageJson;
function writePackageJson(dir, content) {
    fs_1.writeFileSync(path_1.join(dir, './package.json'), sort_package_json_1.sortPackageJson(JSON.stringify(content, null, 2)));
}
exports.writePackageJson = writePackageJson;
