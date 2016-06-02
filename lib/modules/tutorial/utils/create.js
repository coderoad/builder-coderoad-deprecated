"use strict";
var atom_plugin_command_line_1 = require('atom-plugin-command-line');
function createTutorial(name) {
    return new Promise(function (resolve, reject) {
        atom_plugin_command_line_1.default('coderoad', "-v").then(function (res) {
            console.log(res);
        });
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createTutorial;
