"use strict";
var React = require('react');
var Tabs_1 = require('material-ui/Tabs');
var actions_1 = require('../../actions');
var styles = {};
function pageTabs(tutorial, pagePosition) {
    var _this = this;
    if (!tutorial || !tutorial.pages) {
        return null;
    }
    return tutorial.pages.map(function (page, index) {
        return (React.createElement(Tabs_1.Tab, {key: index.toString(), label: page.title.substring(0, 10), onTouchTap: actions_1.pageSet.bind(_this, index)}));
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = pageTabs;
