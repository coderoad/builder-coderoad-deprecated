"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var React = require('react');
var react_redux_1 = require('react-redux');
var Card_1 = require('material-ui/Card');
var Tabs_1 = require('material-ui/Tabs');
var Task_1 = require('../Task');
var Tests_1 = require('../Tests');
var TaskActions_1 = require('../TaskActions');
var Hints_1 = require('../Hints');
var AddButton_1 = require('../AddButton');
var actions_1 = require('../../../actions');
var selectors_1 = require('../../../selectors');
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
var Tasks = (function (_super) {
    __extends(Tasks, _super);
    function Tasks() {
        _super.apply(this, arguments);
    }
    Tasks.prototype.render = function () {
        var _this = this;
        var _a = this.props, tasks = _a.tasks, taskAdd = _a.taskAdd, markdownOpen = _a.markdownOpen;
        return (React.createElement("div", null, tasks.map(function (task, index) { return (React.createElement(Card_1.Card, {key: index, style: styles.card, initiallyExpanded: index === 0}, React.createElement(Card_1.CardHeader, {actAsExpander: true, showExpandableButton: true}, React.createElement("span", {style: styles.title}, "Task ", index + 1), React.createElement(Tests_1.default, {style: styles.test, tests: task.tests})), React.createElement(Card_1.CardText, {expandable: true, style: styles.cardContent}, React.createElement(Tabs_1.Tabs, {tabItemContainerStyle: styles.tabBar}, React.createElement(Tabs_1.Tab, {label: 'Description'}, React.createElement("div", {onClick: markdownOpen.bind(_this, task.description)}, React.createElement(Task_1.default, {key: index, index: index, task: task}))), React.createElement(Tabs_1.Tab, {label: 'Actions'}, React.createElement(TaskActions_1.default, {actions: task.actions, taskPosition: index})), React.createElement(Tabs_1.Tab, {label: 'Hints'}, React.createElement(Hints_1.default, {hints: task.hints, taskPosition: index})))))); }), React.createElement(AddButton_1.default, {callback: taskAdd})));
    };
    Tasks = __decorate([
        react_redux_1.connect(function (state) { return ({
            tasks: selectors_1.tasksSelector(state),
        }); }, function (dispatch) { return ({
            taskAdd: function () { return dispatch(actions_1.tutorialTaskAdd()); },
            markdownOpen: function (content) {
                dispatch(actions_1.editorMarkdownOpen(null, content));
            },
        }); }), 
        __metadata('design:paramtypes', [])
    ], Tasks);
    return Tasks;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Tasks;
