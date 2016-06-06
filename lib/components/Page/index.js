"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var React = require('react');
var react_redux_1 = require('react-redux');
var PageDescription_1 = require('./PageDescription');
var Tasks_1 = require('./Tasks');
var Top_1 = require('../TopPanel/Top');
var actions_1 = require('../../actions');
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
    Page.prototype.componentDidUnmount = function () {
        Top_1.default.toggle(false);
    };
    Page.prototype.render = function () {
        var _a = this.props, tutorial = _a.tutorial, pagePosition = _a.pagePosition, packageJson = _a.packageJson, markdownOpen = _a.markdownOpen;
        var page = tutorial.pages[pagePosition];
        if (!page) {
            return null;
        }
        return (React.createElement("section", {style: styles, className: 'cr-page'}, React.createElement(PageDescription_1.default, {title: page.title, content: page.description, open: true, click: markdownOpen.bind(this)}), React.createElement(Tasks_1.default, {tasks: page.tasks, page: page, config: packageJson.config, pagePosition: pagePosition})));
    };
    Page = __decorate([
        react_redux_1.connect(null, function (dispatch) {
            return {
                markdownOpen: function (content) { return dispatch(actions_1.editorMarkdownOpen(null, content)); }
            };
        }), 
        __metadata('design:paramtypes', [])
    ], Page);
    return Page;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Page;
;
