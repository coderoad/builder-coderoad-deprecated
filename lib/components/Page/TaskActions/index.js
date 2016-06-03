"use strict";
var React = require('react');
var Stepper_1 = require('material-ui/Stepper');
var Subheader_1 = require('material-ui/Subheader');
var index_1 = require('../../index');
var TaskActions = function (_a) {
    var actions = _a.actions;
    return (React.createElement("div", null, React.createElement(Subheader_1.default, null, "Actions"), React.createElement(index_1.DynamicStepper, {status: actions.map(function (action) { return false; })}, actions.map(function (action) { return (React.createElement(Stepper_1.Step, null, React.createElement(Stepper_1.StepLabel, null, action), React.createElement(Stepper_1.StepContent, null, React.createElement("p", null, "Test Test")))); }))));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TaskActions;
