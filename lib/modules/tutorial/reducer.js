"use strict";
var types_1 = require('./types');
var coderoad_cli_1 = require('coderoad-cli');
var fs_1 = require('fs');
var path_1 = require('path');
var _tutorial = {
    title: '',
    pages: [{
            file: './01/page-01.md',
            title: 'Page One',
            description: 'page one description',
            tasks: [{
                    tests: ['./01/01.js'],
                    description: 'first task',
                    hints: ['hint 1', 'hint 2']
                }]
        }]
};
function tutorial(t, action) {
    if (t === void 0) { t = _tutorial; }
    switch (action.type) {
        case types_1.TUTORIAL_INIT:
            var _a = action.payload, dir = _a.dir, name_1 = _a.name;
            coderoad_cli_1.create(dir, name_1);
            if (_tutorial.title.length < 1) {
                t = Object.assign({}, t, { title: name_1 });
            }
            return t;
        case types_1.TUTORIAL_BUILD:
            var dir = action.payload.dir;
            coderoad_cli_1.build(dir, path_1.join('tutorial', 'tutorial.md'));
            return t;
        case types_1.TUTORIAL_LOAD:
            var dir = action.payload.dir;
            var data = JSON.parse(fs_1.readFileSync(path_1.join(dir, 'coderoad.json'), 'utf8'));
            return data;
        default:
            return t;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = tutorial;
