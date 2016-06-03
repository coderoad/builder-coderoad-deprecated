"use strict";
var React = require('react');
var Hints = function (_a) {
    var hints = _a.hints;
    return (React.createElement("div", null, hints.map(function (hint) { return React.createElement("p", null, hint); })));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Hints;
