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
var actions_1 = require('../../../actions');
var index_1 = require('../../index');
var task_object_1 = require('./task-object');
var Stepper_1 = require('material-ui/Stepper');
var styles = {
    stepper: {
        paddingBottom: '20px',
    },
    form: {
        margin: '10px 15px',
        display: 'inline-block',
    },
    select: {
        width: 150,
    },
};
var TaskActions = (function (_super) {
    __extends(TaskActions, _super);
    function TaskActions(props) {
        _super.call(this, props);
        this.state = {
            stepIndex: 0,
            as: {
                action: null,
                content: '',
            }
        };
    }
    TaskActions.prototype.render = function () {
        var _this = this;
        var _a = this.props, actions = _a.actions, tutorialActionAdd = _a.tutorialActionAdd, editorMarkdownOpen = _a.editorMarkdownOpen;
        var stepIndex = this.state.stepIndex;
        var actionList = actions.map(function (a) { return task_object_1.default(a); });
        return (React.createElement("section", null, 
            React.createElement(Stepper_1.Stepper, {activeStep: stepIndex, linear: false, orientation: 'vertical', style: styles.stepper}, actionList.map(function (a, index) { return (React.createElement(Stepper_1.Step, {key: index}, 
                React.createElement(Stepper_1.StepButton, {onClick: _this.setStepIndex.bind(_this, index)}, a.action + (a.singleLine ? ' ' + a.content : '')), 
                React.createElement(Stepper_1.StepContent, null, a.singleLine ? ''
                    : React.createElement("div", {onClick: editorMarkdownOpen.bind(_this, a.content, null)}, 
                        React.createElement(index_1.Markdown, null, '```js\n' + a.content + '\n```')
                    )))); }))
        ));
    };
    TaskActions.prototype.setStepIndex = function (index) {
        this.setState({
            stepIndex: index, as: this.state.as });
    };
    TaskActions.prototype.handleSelect = function (event, index, value) {
        this.setState({
            stepIndex: this.state.stepIndex,
            as: {
                action: value,
                content: this.state.as.content
            }
        });
    };
    TaskActions.prototype.handleText = function (event) {
        this.setState({
            stepIndex: this.state.stepIndex,
            as: {
                action: this.state.as.action,
                content: event.target.value,
            }
        });
    };
    TaskActions = __decorate([
        react_redux_1.connect(null, { tutorialActionAdd: actions_1.tutorialActionAdd, editorMarkdownOpen: actions_1.editorMarkdownOpen }), 
        __metadata('design:paramtypes', [Object])
    ], TaskActions);
    return TaskActions;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TaskActions;
