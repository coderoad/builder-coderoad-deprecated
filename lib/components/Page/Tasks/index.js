"use strict";
var React = require('react');
var Card_1 = require('material-ui/Card');
var Tabs_1 = require('material-ui/Tabs');
var Task_1 = require('../Task');
var TasksComplete_1 = require('../TasksComplete');
var Tests_1 = require('../Tests');
var TaskActions_1 = require('../TaskActions');
var Hints_1 = require('../Hints');
var AddButton_1 = require('../AddButton');
var styles = {
    card: {
        margin: '5px',
    },
    cardContent: {
        margin: '0px',
        padding: '0px',
    },
    tabBar: {
        backgroundColor: 'black',
    },
    addTask: {
        textAlign: 'center',
    },
    test: {
        float: 'right',
        marginRight: '30px',
    },
    title: {
        float: 'left',
        marginLeft: '10px',
    },
};
var Tasks = function (_a) {
    var tasks = _a.tasks, page = _a.page, config = _a.config;
    return (React.createElement("div", null, tasks.map(function (task, index) { return (React.createElement(Card_1.Card, {style: styles.card}, React.createElement(Card_1.CardHeader, {actAsExpander: true, showExpandableButton: true}, React.createElement("span", {style: styles.title}, "Task ", index + 1), React.createElement(Tests_1.default, {style: styles.test, tests: task.tests, config: config})), React.createElement(Card_1.CardText, {expandable: true, style: styles.cardContent}, React.createElement(Tabs_1.Tabs, {tabItemContainerStyle: styles.tabBar}, React.createElement(Tabs_1.Tab, {label: 'Description'}, React.createElement(Task_1.default, {key: index.toString(), index: index, task: task})), React.createElement(Tabs_1.Tab, {label: 'Actions'}, React.createElement(TaskActions_1.default, {actions: task.actions})), React.createElement(Tabs_1.Tab, {label: 'Hints'}, React.createElement(Hints_1.default, {hints: task.hints})))))); }), React.createElement(AddButton_1.default, null), React.createElement(TasksComplete_1.default, {page: page})));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Tasks;
