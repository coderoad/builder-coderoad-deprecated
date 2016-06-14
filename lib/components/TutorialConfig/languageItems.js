"use strict";
var React = require('react');
var MenuItem_1 = require('material-ui/MenuItem');
var core_coderoad_1 = require('core-coderoad');
function runnerItems() {
    return Object.keys(core_coderoad_1.tutorialConfigOptions).map(function (language, index) {
        return (React.createElement(MenuItem_1.default, {key: index, value: language, primaryText: language}));
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = runnerItems;
