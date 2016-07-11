"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var Card_1 = require('material-ui/Card');
var styles = {
    card: {
        margin: '5px',
    },
};
var Result = (function (_super) {
    __extends(Result, _super);
    function Result() {
        _super.apply(this, arguments);
    }
    Result.prototype.render = function () {
        var result = this.props.result;
        return (React.createElement(Card_1.Card, {style: styles.card, initiallyExpanded: true}, React.createElement(Card_1.CardText, {expandable: true}, React.createElement("p", null, "Check the console."))));
    };
    return Result;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Result;
