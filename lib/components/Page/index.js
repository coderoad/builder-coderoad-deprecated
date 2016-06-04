"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var index_1 = require('../index');
var Tasks_1 = require('./Tasks');
var Top_1 = require('../TopPanel/Top');
var styles = {
    width: '100%',
    overflowY: 'scroll',
};
var Page = (function (_super) {
    __extends(Page, _super);
    function Page() {
        _super.apply(this, arguments);
    }
    Page.prototype.componentDidMount = function () {
        Top_1.default.toggle(true);
    };
    Page.prototype.render = function () {
        var _a = this.props, tutorial = _a.tutorial, pagePosition = _a.pagePosition;
        var page = tutorial.pages[pagePosition];
        if (!page) {
            return null;
        }
        return (React.createElement("section", {style: styles, className: 'cr-page'}, React.createElement(index_1.ContentCard, {title: page.title, content: page.description}), React.createElement(Tasks_1.default, {tasks: page.tasks, page: page})));
    };
    return Page;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Page;
;
