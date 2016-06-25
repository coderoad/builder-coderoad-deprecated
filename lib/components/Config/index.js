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
var redux_form_1 = require('redux-form');
var Card_1 = require('material-ui/Card');
var RaisedButton_1 = require('material-ui/RaisedButton');
var actions_1 = require('../../actions');
var runnerItems_1 = require('./runnerItems');
var TopPanel_1 = require('../TopPanel');
var textField_1 = require('../Form/textField');
var selectField_1 = require('../Form/selectField');
var validate_1 = require('./validate');
var styles = {
    card: {
        margin: '10px',
        padding: '30px 20px',
    },
    title: {
        textAlign: 'center',
    },
    form: {
        margin: '0 auto',
        width: '80%',
    },
    button: {
        margin: '30px 10px 20px 10px',
    },
};
var TutorialConfig = (function (_super) {
    __extends(TutorialConfig, _super);
    function TutorialConfig() {
        _super.apply(this, arguments);
    }
    TutorialConfig.prototype.componentWillMount = function () {
        this.props.pjLoad();
        this.props.editorPjOpen();
    };
    TutorialConfig.prototype.componentDidMount = function () {
        var _this = this;
        TopPanel_1.topElement.toggle(false);
        setTimeout(function () {
            var _a = _this.props.packageJson, name = _a.name, config = _a.config, repository = _a.repository;
            _this.props.initialize({
                name: name,
                runnerItem: config.language && config.runner ? config.language + ": " + config.runner : null,
                repo: repository ? repository : '',
            });
        });
        document.getElementsByTagName('input')[0].focus();
    };
    TutorialConfig.prototype.shouldComponentUpdate = function () {
        return !(document.activeElement &&
            typeof document.activeElement.value === 'string');
    };
    TutorialConfig.prototype.onSubmit = function (values) {
        var name = values.name, runnerItem = values.runnerItem, repo = values.repo;
        var _a = runnerItem.split(': '), language = _a[0], runner = _a[1];
        this.props.pjSave(Object.assign({}, this.props.packageJson, {
            name: name,
            repository: repo || '',
            bugs: {
                url: repo || '',
            },
            config: {
                language: language, runner: runner,
            }
        }));
    };
    TutorialConfig.prototype.routeToPage = function () {
        this.props.tutorialInit();
        this.props.routeSet('page');
    };
    TutorialConfig.prototype.render = function () {
        var _a = this.props, submitting = _a.submitting, handleSubmit = _a.handleSubmit, invalid = _a.invalid, packageJson = _a.packageJson;
        return (React.createElement("section", {className: 'cr-page'}, 
            React.createElement(Card_1.Card, {style: styles.card}, 
                React.createElement(Card_1.CardTitle, {style: styles.title, title: 'Tutorial Configuration'}), 
                React.createElement(Card_1.CardText, null, 
                    React.createElement("form", {style: styles.form, onSubmit: handleSubmit(this.onSubmit.bind(this))}, 
                        React.createElement(redux_form_1.Field, {id: 'name', name: 'name', component: textField_1.default.bind(null, {
                            floatingLabelText: 'Tutorial Name',
                            hintText: 'coderoad-tutorial-name',
                        }), tabIndex: '1'}), 
                        React.createElement(redux_form_1.Field, {name: 'runnerItem', component: selectField_1.default.bind(null, {
                            children: runnerItems_1.default(),
                            floatingLabelText: 'runner',
                            id: 'runner',
                        }), tabIndex: '2'}), 
                        React.createElement(redux_form_1.Field, {id: 'repo', name: 'repo', component: textField_1.default.bind(null, {
                            floatingLabelText: 'Path to Repo (optional)',
                            hintText: 'http://github.com/path/to/repo',
                        }), tabIndex: '3'}), 
                        React.createElement(RaisedButton_1.default, {type: 'submit', style: styles.button, label: 'Save', primary: true, disabled: submitting}), 
                        React.createElement(RaisedButton_1.default, {style: styles.button, label: 'Continue', secondary: true, disabled: invalid, onTouchTap: this.routeToPage.bind(this)}))
                ))
        ));
    };
    TutorialConfig = __decorate([
        react_redux_1.connect(function (state) { return ({
            packageJson: state.packageJson,
        }); }, { pjSave: actions_1.pjSave, pjLoad: actions_1.pjLoad, tutorialInit: actions_1.tutorialInit, routeSet: actions_1.routeSet, editorPjOpen: actions_1.editorPjOpen }), 
        __metadata('design:paramtypes', [])
    ], TutorialConfig);
    return TutorialConfig;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = redux_form_1.reduxForm({
    form: 'tutorialConfig',
    validate: validate_1.default,
})(TutorialConfig);
