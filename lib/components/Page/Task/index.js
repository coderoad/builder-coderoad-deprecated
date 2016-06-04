"use strict";
var React = require('react');
var index_1 = require('../../index');
var colors_1 = require('material-ui/styles/colors');
var styles = {
    margin: '5px',
    padding: '10px 5px',
};
function getStatus(index, taskPosition, testRun) {
    return index < taskPosition ? colors_1.lightGreen200 : 'inherit';
}
var Task = function (_a) {
    var task = _a.task, index = _a.index;
    return (React.createElement("section", {style: styles}, React.createElement(index_1.Markdown, null, task.description)));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Task;
