"use strict";
function pageNew(index) {
    index += 1;
    return {
        title: "Page " + index,
        description: "page " + index + " description",
        tasks: [{
                tests: ['./01/01'],
                description: 'first task description',
                hints: [],
                actions: [],
            }]
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = pageNew;
