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
var SelectField_1 = require('material-ui/SelectField');
var Card_1 = require('material-ui/Card');
var RaisedButton_1 = require('material-ui/RaisedButton');
var actions_1 = require('../../actions');
var languageItems_1 = require('./languageItems');
var runnerItems_1 = require('./runnerItems');
var Top_1 = require('../TopPanel/Top');
var redux_form_1 = require('redux-form');
var coderoad_cli_1 = require('coderoad-cli');
var TextField_1 = require('material-ui/TextField');
var styles = {
    card: {
        margin: '10px',
        padding: '30px 20px',
        textAlign: 'center',
    },
    button: {
        margin: '30px 10px 20px 10px',
    },
};
var fields = ['name', 'language', 'runner'];
var validate = function (values) {
    var errors = {};
    if (!name) {
        errors.name = 'Required';
    }
    else if (!coderoad_cli_1.validateName(name)) {
        errors.name = 'Invalid "coderoad-*" name';
    }
    if (!values.language) {
        errors.language = 'Required';
    }
    if (!values.runner) {
        errors.runner = 'Required';
    }
    return errors;
};
var TutorialConfig = (function (_super) {
    __extends(TutorialConfig, _super);
    function TutorialConfig(props) {
        _super.call(this, props);
        var _a = this.props.packageJson, name = _a.name, config = _a.config;
        this.state = {
            name: name,
            language: config.language,
            runner: config.runner,
        };
    }
    TutorialConfig.prototype.componentDidMount = function () {
        Top_1.default.toggle(false);
    };
    TutorialConfig.prototype.handleText = function (prop, event, value) {
        var next = {};
        next[prop] = value;
        this.setState(Object.assign({}, this.state, next));
    };
    TutorialConfig.prototype.handleSelect = function (prop, event, index, value) {
        var next = {};
        next[prop] = value;
        this.setState(Object.assign({}, this.state, next));
    };
    TutorialConfig.prototype.submit = function () {
        var _a = this.state, name = _a.name, language = _a.language, runner = _a.runner;
        this.props.save(Object.assign({}, this.props.packageJson, {
            name: name,
            config: {
                language: language, runner: runner
            }
        }));
    };
    TutorialConfig.prototype.render = function () {
        var _a = this.state, name = _a.name, language = _a.language, runner = _a.runner;
        return (React.createElement(Card_1.Card, {style: styles.card}, React.createElement(Card_1.CardHeader, {title: 'Tutorial Configuration'}), React.createElement(TextField_1.default, {className: 'native-key-bindings', value: name, onChange: this.handleText.bind(this, 'name')}), React.createElement("br", null), React.createElement(SelectField_1.default, __assign({floatingLabelText: 'Language', value: language}, language, {onChange: this.handleSelect.bind(this, 'language')}), languageItems_1.default()), React.createElement("br", null), React.createElement(SelectField_1.default, __assign({floatingLabelText: 'Test Runner', value: runner}, runner, {onChange: this.handleSelect.bind(this, 'runner')}), runnerItems_1.default(language)), React.createElement("br", null), React.createElement(RaisedButton_1.default, {type: 'submit', style: styles.button, label: 'Save', primary: true, onTouchTap: this.submit.bind(this)}), React.createElement(RaisedButton_1.default, {style: styles.button, label: 'Continue', secondary: true, onTouchTap: this.props.routeToPage.bind(this)})));
    };
    TutorialConfig = __decorate([
        react_redux_1.connect(function (state) { return ({
            packageJson: state.packageJson,
        }); }, function (dispatch) { return ({
            save: function (pj) { return dispatch(actions_1.pjSave(pj)); },
            routeToPage: function () {
                dispatch(actions_1.tutorialInit());
                dispatch(actions_1.routeSet('page'));
            }
        }); }), 
        __metadata('design:paramtypes', [Object])
    ], TutorialConfig);
    return TutorialConfig;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = redux_form_1.reduxForm({
    form: 'config',
    fields: fields,
})(TutorialConfig);
