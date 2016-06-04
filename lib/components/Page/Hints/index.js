"use strict";
var React = require('react');
var List_1 = require('material-ui/List');
var Hints = function (_a) {
    var hints = _a.hints;
    return (React.createElement(List_1.List, null, hints.map(function (hint) { return React.createElement(List_1.ListItem, {secondaryText: React.createElement("p", null, hint)}); })));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Hints;
