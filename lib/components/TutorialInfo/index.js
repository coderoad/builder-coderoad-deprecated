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
var TopPanel_1 = require('../TopPanel');
var textField_1 = require('../Form/textField');
var validate_1 = require('./validate');
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
var TutorialInfo = (function (_super) {
    __extends(TutorialInfo, _super);
    function TutorialInfo() {
        _super.apply(this, arguments);
    }
    TutorialInfo.prototype.componentWillMount = function () {
        this.props.initialize({
            description: '',
            version: '0.1.0',
            keywords: 'coderoad, tutorial'
        });
    };
    TutorialInfo.prototype.componentDidMount = function () {
        TopPanel_1.topElement.toggle(false);
        document.getElementsByTagName('input')[0].focus();
    };
    TutorialInfo.prototype.shouldComponentUpdate = function () {
        if (document.activeElement &&
            typeof document.activeElement.value === 'string') {
            return false;
        }
    };
    TutorialInfo.prototype.onSubmit = function (values) {
        var description = values.description, version = values.version, keywords = values.keywords;
        this.props.save(Object.assign({}, this.props.packageJson, {
            description: description, version: version,
            keywords: keywords.split(',')
        }));
    };
    TutorialInfo.prototype.render = function () {
        var _a = this.props, pristine = _a.pristine, submitting = _a.submitting, handleSubmit = _a.handleSubmit, invalid = _a.invalid;
        return (React.createElement(Card_1.Card, {style: styles.card}, 
            React.createElement(Card_1.CardHeader, {title: 'Tutorial Info'}), 
            React.createElement("form", {onSubmit: handleSubmit(this.onSubmit.bind(this))}, 
                React.createElement(redux_form_1.Field, {name: 'description', component: textField_1.default.bind(null, {
                    hintText: 'Tutorial description',
                    floatingLabelText: 'Description',
                })}), 
                React.createElement(redux_form_1.Field, {name: 'version', component: textField_1.default.bind(null, {
                    hintText: '0.1.0',
                    floatingLabelText: 'Version',
                    disabled: true,
                })}), 
                React.createElement(redux_form_1.Field, {name: 'keywords', component: textField_1.default.bind(null, {
                    hintText: 'coderoad, react, js, etc',
                    floatingLabelText: 'Keywords',
                })}), 
                React.createElement(RaisedButton_1.default, {type: 'submit', style: styles.button, label: 'Save', primary: true, disabled: pristine || submitting || invalid}))));
    };
    TutorialInfo = __decorate([
        react_redux_1.connect(function (state) { return ({
            packageJson: state.packageJson,
        }); }, function (dispatch) { return ({
            save: function (pj) { dispatch(actions_1.pjSave(pj)); },
            routeToTutorial: function () { dispatch(actions_1.routeSet('page')); }
        }); }), 
        __metadata('design:paramtypes', [])
    ], TutorialInfo);
    return TutorialInfo;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = redux_form_1.reduxForm({
    form: 'tutorialInfo',
    validate: validate_1.default,
})(TutorialInfo);
