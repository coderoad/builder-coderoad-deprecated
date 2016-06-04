"use strict";
var React = require('react');
var Tests = function (_a) {
    var tests = _a.tests, style = _a.style;
    return (React.createElement("div", {style: style}, tests.map(function (test) { return React.createElement("p", null, test); })));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Tests;
