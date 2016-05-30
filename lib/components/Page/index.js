"use strict";
var React = require('react');
var index_1 = require('../index');
var styles = {
    width: '100%',
    overflowY: 'scroll',
};
var Page = function (_a) {
    var page = _a.page, tasks = _a.tasks, pagePosition = _a.pagePosition;
    return (React.createElement("section", {style: styles, className: 'cr-page'}, React.createElement(index_1.ContentCard, {title: page.title, content: page.description})));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Page;
