"use strict";
var React = require('react');
var tutorialConfig_1 = require('../../options/tutorialConfig');
var MenuItem_1 = require('material-ui/MenuItem');
function runnerItems() {
    return Object.keys(tutorialConfig_1.default).map(function (lang, lIndex) {
        return tutorialConfig_1.default[lang].runners.map(function (runner, rIndex) {
            var val = lang + ": " + runner;
            return (React.createElement(MenuItem_1.default, {key: lIndex + "." + rIndex, value: val, primaryText: val}));
        });
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = runnerItems;
