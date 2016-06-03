"use strict";
var React = require('react');
var Tests = function (_a) {
    var tests = _a.tests;
    return (React.createElement("div", null, tests.map(function (test) { return React.createElement("p", null, test); })));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Tests;
