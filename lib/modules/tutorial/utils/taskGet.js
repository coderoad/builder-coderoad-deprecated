"use strict";
var path_1 = require('path');
var twoDigitify_1 = require('../../../services/twoDigitify');
function taskGet(pagePosition, taskPosition) {
    return {
        tests: [].concat(path_1.join(twoDigitify_1.default(pagePosition + 1), twoDigitify_1.default(taskPosition + 1))),
        description: '',
        hints: [],
        actions: [],
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = taskGet;
