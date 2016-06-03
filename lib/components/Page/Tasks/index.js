"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var List_1 = require('material-ui/List');
var Card_1 = require('material-ui/Card');
var Subheader_1 = require('material-ui/Subheader');
var Task_1 = require('../Task');
var TasksComplete_1 = require('../TasksComplete');
function visibleTasks(tasks, taskPosition) {
    return tasks.slice(0, taskPosition + 1);
}
var styles = {
    margin: '10px 5px'
};
var Tasks = (function (_super) {
    __extends(Tasks, _super);
    function Tasks() {
        _super.apply(this, arguments);
    }
    Tasks.prototype.render = function () {
        var _a = this.props, tasks = _a.tasks, page = _a.page;
        return (React.createElement("div", null, React.createElement(Card_1.Card, {style: styles}, React.createElement(List_1.List, null, React.createElement(Subheader_1.default, null, "Tasks"), tasks.map(function (task, index) { return (React.createElement(Task_1.default, {key: index, index: index, task: task})); }))), React.createElement(TasksComplete_1.default, {page: page}), React.createElement("div", {ref: 'listEnd'})));
    };
    return Tasks;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Tasks;
