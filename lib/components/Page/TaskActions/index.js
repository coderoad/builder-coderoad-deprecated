"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var Stepper_1 = require('material-ui/Stepper');
var index_1 = require('../../index');
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
        var actions = this.props.actions;
        var stepIndex = this.state.stepIndex;
        var actionList = actions.map(function (a) {
            var obj = {
                action: a.substring(0, a.indexOf('(')),
                content: a.substring(a.indexOf('(') + 2, a.length - 2)
            };
            if (obj.action === 'open') {
                obj.singleLine = true;
            }
            return obj;
        });
        return (React.createElement(Stepper_1.Stepper, {activeStep: stepIndex, linear: false, orientation: 'vertical'}, actionList.map(function (a, index) { return (React.createElement(Stepper_1.Step, null, React.createElement(Stepper_1.StepButton, {onClick: function () { return _this.setState({ stepIndex: index }); }}, a.action + (a.singleLine ? ' ' + a.content : '')), React.createElement(Stepper_1.StepContent, null, a.singleLine ? ''
            : React.createElement(index_1.Markdown, null, '```js\n' + a.content + '\n```')))); })));
    };
    return TaskActions;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TaskActions;
