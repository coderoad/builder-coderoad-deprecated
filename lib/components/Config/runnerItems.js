"use strict";
var React = require('react');
var MenuItem_1 = require('material-ui/MenuItem');
var core_coderoad_1 = require('core-coderoad');
function runnerItems(language) {
    return core_coderoad_1.tutorialConfigOptions[language].runners.map(function (runner, index) {
        return (React.createElement(MenuItem_1.default, {key: index, value: runner, primaryText: runner}));
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = runnerItems;
