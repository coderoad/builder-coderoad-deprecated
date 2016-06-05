"use strict";
var React = require('react');
var List_1 = require('material-ui/List');
var AddButton_1 = require('../AddButton');
var styles = {
    add: {
        textAlign: 'center',
    },
};
var Hints = function (_a) {
    var hints = _a.hints;
    return (React.createElement(List_1.List, null, !hints || !hints.length
        ? []
        : hints.map(function (hint, index) { return (React.createElement(List_1.ListItem, {secondaryText: React.createElement("p", null, index + 1, ". ", hint)})); }), React.createElement(AddButton_1.default, null)));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Hints;
