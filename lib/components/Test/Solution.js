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
var actions_1 = require('../../actions');
var selectors_1 = require('../../selectors');
var index_1 = require('../index');
var Card_1 = require('material-ui/Card');
var RaisedButton_1 = require('material-ui/RaisedButton');
var styles = {
    card: {
        margin: '5px',
    },
    title: {
        textAlign: 'center',
    },
    buttons: {
        textAlign: 'center',
    },
};
var Solution = (function (_super) {
    __extends(Solution, _super);
    function Solution() {
        _super.apply(this, arguments);
    }
    Solution.prototype.render = function () {
        return (React.createElement(Card_1.Card, {style: styles.card, initiallyExpanded: true}, 
            React.createElement(Card_1.CardTitle, {title: 'Solution', style: styles.title}), 
            React.createElement(Card_1.CardText, {expandable: true}, 
                React.createElement("p", null, "Try out a solution against your tests"), 
                React.createElement(index_1.TextEditor, {name: 'solution', ref: 'solution', placeholder: 'var a = "example code";', lang: this.props.language}), 
                React.createElement("br", null), 
                React.createElement("div", {style: styles.buttons}, 
                    React.createElement(RaisedButton_1.default, {label: 'Run Test', primary: true, onTouchTap: this.runTest.bind(this)})
                ), 
                React.createElement("br", null), 
                React.createElement("br", null), 
                React.createElement("p", null, "Check the console for test results."))));
    };
    Solution.prototype.componentDidMount = function () {
        this.props.runnerSet();
    };
    Solution.prototype.runTest = function () {
        var content = "\n  " + this.refs.solution.get() + "\n  " + atom.workspace.getActiveTextEditor().getText() + "\n  ";
        this.props.runnerRun(content);
    };
    Solution = __decorate([
        react_redux_1.connect(function (state) { return ({
            language: selectors_1.languageSuffixSelector(state),
        }); }, { runnerRun: actions_1.runnerRun, runnerSet: actions_1.runnerSet }), 
        __metadata('design:paramtypes', [])
    ], Solution);
    return Solution;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Solution;
