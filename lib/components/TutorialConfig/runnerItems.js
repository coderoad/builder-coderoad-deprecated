"use strict";
var React = require('react');
var MenuItem_1 = require('material-ui/MenuItem');
var config_options_1 = require('../../config-options');
function runnerItems(language) {
    return config_options_1.default[language].runners.map(function (runner, index) {
        return (React.createElement(MenuItem_1.default, {key: index, value: runner, primaryText: runner}));
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = runnerItems;
