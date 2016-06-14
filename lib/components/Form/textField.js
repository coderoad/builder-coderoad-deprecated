"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var React = require('react');
var TextField_1 = require('material-ui/TextField');
var textField = function (_a, props) {
    var hintText = _a.hintText, floatingLabelText = _a.floatingLabelText, disabled = _a.disabled;
    return (React.createElement(TextField_1.default, __assign({className: 'native-key-bindings', hintText: hintText, floatingLabelText: floatingLabelText, disabled: disabled, errorText: props.touched && props.error}, props)));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = textField;
