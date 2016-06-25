"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var TopPanel_1 = require('../TopPanel');
var Solution_1 = require('./Solution');
var styles = {
    page: {
        height: '100%',
        width: '100%',
        overflowY: 'scroll',
    },
};
var Test = (function (_super) {
    __extends(Test, _super);
    function Test() {
        _super.apply(this, arguments);
    }
    Test.prototype.componentDidMount = function () {
        TopPanel_1.topElement.toggle(true);
    };
    Test.prototype.render = function () {
        return (React.createElement("section", {style: styles.page, className: 'cr-page'}, 
            React.createElement(Solution_1.default, null)
        ));
    };
    return Test;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Test;
;
