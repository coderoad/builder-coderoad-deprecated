"use strict";
var React = require('react');
var TaskActions = function (_a) {
    var actions = _a.actions;
    return (React.createElement("div", null, actions.map(function (action) { return React.createElement("p", null, action); })));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TaskActions;
