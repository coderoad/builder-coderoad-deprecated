"use strict";
var React = require('react');
var Card_1 = require('material-ui/Card');
var Tabs_1 = require('material-ui/Tabs');
var Task_1 = require('../Task');
var TasksComplete_1 = require('../TasksComplete');
var Tests_1 = require('../Tests');
var TaskActions_1 = require('../TaskActions');
var Hints_1 = require('../Hints');
var styles = {
    card: {
        margin: '5px',
    },
    tabBar: {
        backgroundColor: 'black',
    }
};
var Tasks = function (_a) {
    var tasks = _a.tasks, page = _a.page;
    return (React.createElement("div", null, tasks.map(function (task, index) { return (React.createElement(Card_1.Card, {style: styles.card}, React.createElement(Card_1.CardTitle, null, "Task ", index + 1, React.createElement(Tests_1.default, {style: { float: 'right' }, tests: task.tests})), React.createElement(Tabs_1.Tabs, {tabItemContainerStyle: styles.tabBar}, React.createElement(Tabs_1.Tab, {label: 'Description'}, React.createElement(Task_1.default, {key: index.toString(), index: index, task: task})), React.createElement(Tabs_1.Tab, {label: 'Actions'}, React.createElement(TaskActions_1.default, {actions: task.actions})), React.createElement(Tabs_1.Tab, {label: 'Hints'}, React.createElement(Hints_1.default, {hints: task.hints}))))); }), React.createElement(TasksComplete_1.default, {page: page})));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Tasks;
