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
var SelectField_1 = require('material-ui/SelectField');
var selectField = function (_a, props) {
    var children = _a.children, floatingLabelText = _a.floatingLabelText, id = _a.id;
    return (React.createElement(SelectField_1.default, __assign({value: props.value, floatingLabelText: floatingLabelText, errorText: props.touched && props.error}, props, {onChange: function (event, index, value) { return props.onChange(value); }}), children));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = selectField;
