"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var React = require('react');
var index_1 = require('../index');
var Top_1 = require('../TopPanel/Top');
var Routes = (function (_super) {
    __extends(Routes, _super);
    function Routes() {
        _super.apply(this, arguments);
    }
    Routes.prototype.render = function () {
        switch (this.props.route) {
            case 'page':
                Top_1.default.toggle(false);
                return React.createElement(index_1.Page, __assign({}, this.props));
            case 'start':
                return React.createElement(index_1.Start, __assign({}, this.props));
            case 'tutorialConfig':
                return React.createElement(index_1.TutorialConfig, __assign({}, this.props));
            case 'tutorialInfo':
                return React.createElement(index_1.TutorialInfo, __assign({}, this.props));
            default:
                throw 'Error: Route not found.';
        }
    };
    return Routes;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Routes;
