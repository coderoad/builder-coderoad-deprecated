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
var Tabs_1 = require('material-ui/Tabs');
var add_1 = require('material-ui/svg-icons/content/add');
var pageTabs_1 = require('./pageTabs');
var styles = {
    tabs: {
        marginRight: '400px',
    },
};
var TopPanel = (function (_super) {
    __extends(TopPanel, _super);
    function TopPanel() {
        _super.apply(this, arguments);
    }
    TopPanel.prototype.render = function () {
        return (React.createElement(Tabs_1.Tabs, {style: styles.tabs}, pageTabs_1.default(this.props.tutorial), React.createElement(Tabs_1.Tab, {icon: React.createElement(add_1.default, null)})));
    };
    TopPanel = __decorate([
        react_redux_1.connect(function (_a) {
            var tutorial = _a.tutorial;
            return { tutorial: tutorial };
        }), 
        __metadata('design:paramtypes', [])
    ], TopPanel);
    return TopPanel;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TopPanel;
