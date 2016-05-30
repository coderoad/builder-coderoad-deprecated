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
var TextField_1 = require('material-ui/TextField');
var SelectField_1 = require('material-ui/SelectField');
var MenuItem_1 = require('material-ui/MenuItem');
var Card_1 = require('material-ui/Card');
var RaisedButton_1 = require('material-ui/RaisedButton');
var actions_1 = require('../../actions');
var styles = {
    margin: '10px',
    padding: '30px 20px',
    textAlign: 'center',
};
var TutorialConfig = (function (_super) {
    __extends(TutorialConfig, _super);
    function TutorialConfig(props) {
        _super.call(this, props);
        this.state = {
            name: 'coderoad-',
            repo: '',
            language: 'JS',
            runner: 'mocha-coderoad',
            runnerOptions: {}
        };
    }
    TutorialConfig.prototype.handleChange = function (value, event) {
        var obj = {};
        obj[value] = event.target.value;
        this.setState(Object.assign({}, this.state, obj));
    };
    TutorialConfig.prototype.save = function () {
        this.props.save(this.state);
    };
    TutorialConfig.prototype.render = function () {
        return (React.createElement(Card_1.Card, {style: styles}, React.createElement(Card_1.CardHeader, {title: 'Tutorial Configuration'}), React.createElement(TextField_1.default, {floatingLabelText: 'Tutorial Package Name', value: this.state.name, onChange: this.handleChange.bind(this, 'name', event)}), React.createElement("br", null), React.createElement(SelectField_1.default, {floatingLabelText: 'Language', value: this.state.language, onChange: this.handleChange.bind(this, 'language', event)}, React.createElement(MenuItem_1.default, {value: 'JS', primaryText: 'JS'}), React.createElement(MenuItem_1.default, {value: 'Python', primaryText: 'Python'})), React.createElement("br", null), React.createElement(SelectField_1.default, {floatingLabelText: 'Test Runner', value: this.state.runner, onChange: this.handleChange.bind(this, 'runner', event)}, React.createElement(MenuItem_1.default, {value: 'mocha-coderoad', primaryText: 'Mocha-CodeRoad'})), React.createElement("br", null), React.createElement("br", null), React.createElement(RaisedButton_1.default, {label: 'Save', primary: true, onTouchTap: this.save.bind(this)})));
    };
    TutorialConfig = __decorate([
        react_redux_1.connect(null, function (dispatch) {
            return {
                save: function (config) { return dispatch(actions_1.tutorialConfigSave(config)); }
            };
        }), 
        __metadata('design:paramtypes', [Object])
    ], TutorialConfig);
    return TutorialConfig;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TutorialConfig;
