"use strict";
var React = require('react');
var Tabs_1 = require('material-ui/Tabs');
var styles = {};
function pageTabs(tutorial) {
    if (!tutorial || !tutorial.pages) {
        return null;
    }
    return tutorial.pages.map(function (page) {
        return (React.createElement(Tabs_1.Tab, {label: page.title.substring(0, 10)}));
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = pageTabs;
