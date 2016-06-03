"use strict";
var React = require('react');
var List_1 = require('material-ui/List');
var Card_1 = require('material-ui/Card');
var Subheader_1 = require('material-ui/Subheader');
var Task_1 = require('../Task');
var TasksComplete_1 = require('../TasksComplete');
var styles = {
    margin: '10px 5px'
};
var Tasks = function (_a) {
    var tasks = _a.tasks, page = _a.page;
    return (React.createElement("div", null, React.createElement(Card_1.Card, {style: styles}, React.createElement(List_1.List, null, React.createElement(Subheader_1.default, null, "Tasks"), tasks.map(function (task, index) { return (React.createElement(Task_1.default, {key: index.toString(), index: index, task: task})); }))), React.createElement(TasksComplete_1.default, {page: page})));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Tasks;
