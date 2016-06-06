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
var _this = this;
var React = require('react');
var react_redux_1 = require('react-redux');
var Stepper_1 = require('material-ui/Stepper');
var index_1 = require('../../index');
var AddButton_1 = require('../AddButton');
var task_object_1 = require('./task-object');
var actions_1 = require('../../../actions');
var TaskActions = (function (_super) {
    __extends(TaskActions, _super);
    function TaskActions(props) {
        _super.call(this, props);
        this.state = {
            stepIndex: 0,
        };
    }
    TaskActions.prototype.render = function () {
        var _this = this;
        var _a = this.props, actions = _a.actions, addAction = _a.addAction;
        var stepIndex = this.state.stepIndex;
        var actionList = actions.map(function (a) { return task_object_1.default(a); });
        return (React.createElement(Stepper_1.Stepper, {activeStep: stepIndex, linear: false, orientation: 'vertical'}, actionList.map(function (a, index) { return (React.createElement(Stepper_1.Step, null, React.createElement(Stepper_1.StepButton, {onClick: function () { return _this.setState({ stepIndex: index }); }}, a.action + (a.singleLine ? ' ' + a.content : '')), React.createElement(Stepper_1.StepContent, null, a.singleLine ? ''
            : React.createElement(index_1.Markdown, null, '```js\n' + a.content + '\n```')))); }), React.createElement(AddButton_1.default, {callback: addAction.bind(this, 'test(`test`)')})));
    };
    TaskActions = __decorate([
        react_redux_1.connect(null, function (dispatch) {
            return {
                addAction: function (actionString) { return dispatch(actions_1.tutorialActionAdd(_this.props.taskPosition, actionString)); }
            };
        }), 
        __metadata('design:paramtypes', [Object])
    ], TaskActions);
    return TaskActions;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TaskActions;
