"use strict";
var React = require('react');
var index_1 = require('../../index');
var styles = {
    task: {
        margin: '5px',
        padding: '10px 10px',
    },
};
var Task = function (_a) {
    var task = _a.task, index = _a.index;
    return (React.createElement("section", {style: styles.task}, React.createElement(index_1.Markdown, null, task.description)));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Task;
