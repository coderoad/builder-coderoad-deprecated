"use strict";
var React = require('react');
var index_1 = require('../index');
var styles = {
    width: '100%',
    overflowY: 'scroll',
};
var Page = function (_a) {
    var tutorial = _a.tutorial, pagePosition = _a.pagePosition;
    var page = tutorial.pages[pagePosition];
    if (!page) {
        return null;
    }
    return (React.createElement("section", {style: styles, className: 'cr-page'}, React.createElement(index_1.ContentCard, {title: page.title, content: page.description})));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Page;
