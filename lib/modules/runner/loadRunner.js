"use strict";
var path_1 = require('path');
var node_file_exists_1 = require('node-file-exists');
function noRunner() {
    alert("Runner not installed.\nSelect a runner and run \"npm install\"");
}
function loadRunner(dir, name) {
    var packagePath = path_1.join(dir, 'node_modules', name);
    if (!node_file_exists_1.default(packagePath)) {
        return noRunner;
    }
    var runner;
    try {
        var pj = path_1.join(packagePath, 'package.json');
        var runnerMain = require(pj).main;
        var pathToMain = path_1.resolve(packagePath, runnerMain);
        runner = require(pathToMain);
    }
    catch (e) {
        console.log(e);
    }
    return runner ? runner.default : noRunner;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = loadRunner;
