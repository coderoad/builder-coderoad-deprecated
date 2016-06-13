"use strict";
var React = require('react');
var MenuItem_1 = require('material-ui/MenuItem');
var options_1 = require('core-coderoad/lib/options');
function runnerItems(language) {
    console.log('lang', language);
    return options_1.default[language].runners.map(function (runner, index) {
        return (React.createElement(MenuItem_1.default, {key: index, value: runner, primaryText: runner}));
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = runnerItems;
