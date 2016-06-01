"use strict";
var types_1 = require('./types');
var create_1 = require('./utils/create');
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
            var name_1 = action.payload.name;
            create_1.default(name_1);
            if (_tutorial.title.length < 1) {
                t = Object.assign({}, t, { title: name_1 });
            }
            return t;
        default:
            return t;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = tutorial;
