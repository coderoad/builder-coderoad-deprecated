"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var PageDescription_1 = require('./PageDescription');
var Tasks_1 = require('./Tasks');
var TasksComplete_1 = require('./TasksComplete');
var TopPanel_1 = require('../TopPanel');
var styles = {
    height: '100%',
    width: '100%',
    overflowY: 'scroll',
};
var Page = (function (_super) {
    __extends(Page, _super);
    function Page() {
        _super.apply(this, arguments);
    }
    Page.prototype.componentDidMount = function () {
        TopPanel_1.topElement.toggle(true);
    };
    Page.prototype.componentWillUnmount = function () {
        TopPanel_1.topElement.toggle(false);
    };
    Page.prototype.render = function () {
        return (React.createElement("section", {style: styles, className: 'cr-page'}, 
            React.createElement(PageDescription_1.default, null), 
            React.createElement(Tasks_1.default, null), 
            React.createElement(TasksComplete_1.default, null)));
    };
    return Page;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Page;
;
