"use strict";
var React = require('react');
var Stepper_1 = require('material-ui/Stepper');
var index_1 = require('../../index');
var TaskActions = function (_a) {
    var actions = _a.actions;
    var actionsList = actions.map(function (a) {
        return {
            action: a.substring(0, a.indexOf('(')),
            content: a.substring(a.indexOf('(') + 2, a.length - 2)
        };
    });
    return (React.createElement(index_1.DynamicStepper, {status: actions.map(function (action) { return false; })}, actionsList.map(function (a) { return (React.createElement(Stepper_1.Step, null, React.createElement(Stepper_1.StepLabel, null, a.action), React.createElement(Stepper_1.StepContent, null, React.createElement("p", null, a.content)))); })));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TaskActions;
