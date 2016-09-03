"use strict";
var React = require('react');
var index_1 = require('../../index');
var Stepper_1 = require('material-ui/Stepper');
var colors_1 = require('material-ui/styles/colors');
var error_1 = require('material-ui/svg-icons/alert/error');
var warning_1 = require('material-ui/svg-icons/alert/warning');
function publishStep(index, type, field, click) {
    var icon;
    if (type === 'error') {
        icon = React.createElement(error_1.default, {color: colors_1.pink500});
    }
    else if (type === 'warning') {
        icon = React.createElement(warning_1.default, {color: colors_1.amber500});
    }
    else {
        throw 'Invalid PublishError icon';
    }
    return (React.createElement(Stepper_1.Step, {key: index, completed: false}, 
        React.createElement(Stepper_1.StepButton, {icon: icon, onClick: click}, field.name), 
        React.createElement(Stepper_1.StepContent, null, 
            React.createElement("p", null, 
                "\"", 
                field.name, 
                "\" ", 
                field.msg), 
            React.createElement("p", null, "Example:"), 
            React.createElement(index_1.CodeBlock, {lang: 'js'}, "{\"" + field.name + "\": " + field.example + "}"))));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = publishStep;
;
