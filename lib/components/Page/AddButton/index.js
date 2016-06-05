"use strict";
var React = require('react');
var FlatButton_1 = require('material-ui/FlatButton');
var styles = {
    textAlign: 'center',
};
var AddButton = function (_a) {
    var callback = _a.callback;
    return (React.createElement("div", {style: styles}, React.createElement(FlatButton_1.default, {label: '+', primary: true, onClick: callback})));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AddButton;
