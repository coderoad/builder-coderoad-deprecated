"use strict";
var _this = this;
var React = require('react');
var index_1 = require('../../index');
var Card_1 = require('material-ui/Card');
var styles = {
    margin: '5px'
};
var PageDescription = function (_a) {
    var title = _a.title, content = _a.content, open = _a.open, click = _a.click;
    var contentArray = content.split('\n\n');
    return (React.createElement(Card_1.Card, {style: styles, initiallyExpanded: open || false}, title
        ? React.createElement(Card_1.CardHeader, {title: title, actAsExpander: true, showExpandableButton: true}) : null, React.createElement(Card_1.CardText, {expandable: true}, contentArray.map(function (c) { return (React.createElement(index_1.Markdown, {onClick: click.bind(_this, c)}, c)); }))));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PageDescription;
