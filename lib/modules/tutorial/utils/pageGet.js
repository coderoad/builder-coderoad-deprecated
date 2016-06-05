"use strict";
var taskGet_1 = require('./taskGet');
function pageGet(index) {
    return {
        title: "Page " + (index + 1),
        description: "page " + (index + 1) + " description",
        tasks: [taskGet_1.default(index, 0)]
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = pageGet;
