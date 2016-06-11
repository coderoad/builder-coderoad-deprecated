"use strict";
var React = require('react');
var MenuItem_1 = require('material-ui/MenuItem');
var options_1 = require('core-coderoad/lib/options');
function runnerItems() {
    return Object.keys(options_1.default).map(function (language, index) {
        return (React.createElement(MenuItem_1.default, {key: index, value: language, primaryText: language}));
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = runnerItems;
