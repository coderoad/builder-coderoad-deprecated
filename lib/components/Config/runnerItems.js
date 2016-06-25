"use strict";
var React = require('react');
var MenuItem_1 = require('material-ui/MenuItem');
var core_coderoad_1 = require('core-coderoad');
function runnerItems() {
    return Object.keys(core_coderoad_1.tutorialConfigOptions).map(function (lang, lIndex) {
        return core_coderoad_1.tutorialConfigOptions[lang].runners.map(function (runner, rIndex) {
            var val = lang + ": " + runner;
            return (React.createElement(MenuItem_1.default, {key: lIndex + "." + rIndex, value: val, primaryText: val}));
        });
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = runnerItems;
