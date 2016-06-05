"use strict";
function updateTask(tutorial, pagePosition, taskPosition, prop, value) {
    tutorial.pages[pagePosition].tasks[taskPosition] = tutorial.pages[pagePosition].tasks[taskPosition][prop].concat(value);
    return tutorial;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = updateTask;
