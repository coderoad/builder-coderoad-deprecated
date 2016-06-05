"use strict";
var path_1 = require('path');
function twoDigitify(n) {
    return n > 9 ? '' + n : '0' + n;
}
function taskGet(pagePosition, taskPosition) {
    return {
        tests: [].concat(path_1.join(twoDigitify(pagePosition + 1), twoDigitify(taskPosition + 1))),
        description: '',
        hints: [],
        actions: [],
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = taskGet;
