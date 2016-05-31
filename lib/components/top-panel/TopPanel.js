"use strict";
var React = require('react');
var Tabs_1 = require('material-ui/Tabs');
var add_1 = require('material-ui/svg-icons/content/add');
var pageTabs_1 = require('./pageTabs');
var styles = {
    tabs: {
        marginRight: '400px',
    },
};
var TopPanel = function (_a) {
    var tutorial = _a.tutorial;
    return (React.createElement(Tabs_1.Tabs, {style: styles.tabs}, pageTabs_1.default(tutorial), React.createElement(Tabs_1.Tab, {icon: React.createElement(add_1.default, null)})));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TopPanel;
