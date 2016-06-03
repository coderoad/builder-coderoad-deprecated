"use strict";
var React = require('react');
var index_1 = require('../../index');
var List_1 = require('material-ui/List');
var colors_1 = require('material-ui/styles/colors');
var Tests_1 = require('../Tests');
var TaskActions_1 = require('../TaskActions');
var Hints_1 = require('../Hints');
var styles = {
    task: {
        margin: '5px',
        padding: '5px',
        position: 'relative'
    },
    index: {
        position: 'absolute',
        top: '20px',
        left: '45px',
    },
    description: {
        backgroundColor: 'inherit',
        paddingTop: '-10px',
        paddingLeft: '55px',
        fontSize: '14px',
        lineHeight: '1.6',
    },
};
function getStatus(index, taskPosition, testRun) {
    return index < taskPosition ? colors_1.lightGreen200 : 'inherit';
}
var Task = function (_a) {
    var task = _a.task, index = _a.index;
    return (React.createElement("div", null, React.createElement(List_1.ListItem, {key: index, style: styles.task}, React.createElement("span", {style: styles.index}, index + 1, "."), React.createElement("div", {style: styles.description}, React.createElement(index_1.Markdown, null, task.description)), React.createElement(Tests_1.default, {tests: task.tests}), React.createElement(Hints_1.default, {hints: task.hints})), React.createElement(TaskActions_1.default, {actions: task.actions})));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Task;
