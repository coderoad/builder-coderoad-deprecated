"use strict";
var atom_plugin_command_line_1 = require('atom-plugin-command-line');
function createTutorial(name) {
    return new Promise(function (resolve, reject) {
        atom_plugin_command_line_1.default('coderoad', "create " + name)
            .then(function (res) {
            res.match(/✓/g) ? resolve() : reject();
        });
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createTutorial;
