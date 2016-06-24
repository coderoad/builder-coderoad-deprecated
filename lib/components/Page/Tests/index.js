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
var actions_1 = require('../../../actions');
var core_coderoad_1 = require('core-coderoad');
var styles = {
    test: {
        bottom: '8px',
    },
};
var Tests = (function (_super) {
    __extends(Tests, _super);
    function Tests() {
        _super.apply(this, arguments);
    }
    Tests.prototype.render = function () {
        var _this = this;
        var _a = this.props, tests = _a.tests, style = _a.style, editorTestOpen = _a.editorTestOpen;
        return (React.createElement("div", {style: style}, tests.map(function (file, index) { return (React.createElement("button", {onClick: editorTestOpen.bind(_this, file)}, file)); })));
    };
    Tests = __decorate([
        react_redux_1.connect(function (state) { return ({
            config: core_coderoad_1.configSelector(state),
        }); }, { editorTestOpen: actions_1.editorTestOpen }), 
        __metadata('design:paramtypes', [])
    ], Tests);
    return Tests;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Tests;
