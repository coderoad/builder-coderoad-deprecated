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
var Card_1 = require('material-ui/Card');
var RaisedButton_1 = require('material-ui/RaisedButton');
var actions_1 = require('../../actions');
var TopPanel_1 = require('../TopPanel');
var Stepper_1 = require('material-ui/Stepper');
var publishStep_1 = require('./publishStep');
var styles = {
    card: {
        margin: '10px',
        padding: '30px 20px',
    },
    header: {},
    button: {
        margin: '30px 10px 20px 10px',
    },
};
var TutorialPublish = (function (_super) {
    __extends(TutorialPublish, _super);
    function TutorialPublish(props) {
        _super.call(this, props);
        this.state = {
            stepIndex: 0,
        };
    }
    TutorialPublish.prototype.componentWillMount = function () {
        this.props.pjLoad();
        this.props.editorPjOpen();
    };
    TutorialPublish.prototype.componentDidMount = function () {
        TopPanel_1.topElement.toggle(false);
        this.validate();
    };
    TutorialPublish.prototype.validate = function () {
        this.props.pjLoad();
        this.props.validatePj();
    };
    TutorialPublish.prototype.selectStep = function (index) {
        this.setState({
            stepIndex: index
        });
    };
    TutorialPublish.prototype.render = function () {
        var _this = this;
        var validation = this.props.validation;
        return (React.createElement("section", {className: 'cr-page'}, 
            React.createElement(Card_1.Card, {style: styles.card}, 
                React.createElement(Card_1.CardHeader, {title: 'Tutorial Errors & Warnings', style: { margin: '0 auto' }}), 
                React.createElement(Stepper_1.Stepper, {activeStep: this.state.stepIndex, linear: false, orientation: 'vertical'}, 
                    validation.errors.map(function (field, index) { return publishStep_1.default(index, 'error', field, _this.selectStep.bind(_this, index)); }), 
                    validation.warnings.map(function (field, index) { return publishStep_1.default(index + validation.errors.length, 'warning', field, _this.selectStep.bind(_this, index + validation.errors.length)); })), 
                React.createElement(RaisedButton_1.default, {style: styles.button, label: 'Validate', primary: true, onTouchTap: this.validate.bind(this)}), 
                React.createElement(RaisedButton_1.default, {style: styles.button, label: 'Publish', secondary: true, disabled: validation.errors.length > 0, onTouchTap: function () { return alert('Publish not yet implemented'); }}))
        ));
    };
    TutorialPublish = __decorate([
        react_redux_1.connect(function (state) { return ({
            validation: state.validation,
        }); }, { pjLoad: actions_1.pjLoad, editorPjOpen: actions_1.editorPjOpen, validatePj: actions_1.validatePj }), 
        __metadata('design:paramtypes', [Object])
    ], TutorialPublish);
    return TutorialPublish;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TutorialPublish;
