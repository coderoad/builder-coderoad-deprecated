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
var Card_1 = require('material-ui/Card');
var RaisedButton_1 = require('material-ui/RaisedButton');
var actions_1 = require('../../actions');
var styles = {
    margin: '10px',
    padding: '30px 20px',
    textAlign: 'center',
};
var buttonStyles = {
    margin: '30px 10px 20px 10px',
};
var TutorialInfo = (function (_super) {
    __extends(TutorialInfo, _super);
    function TutorialInfo(props) {
        _super.call(this, props);
        this.state = {
            pj: this.props.packageJson
        };
    }
    TutorialInfo.prototype.handleText = function (prop, event) {
        this.handleChange(prop, event.target.value);
    };
    TutorialInfo.prototype.handleSelect = function (prop, event, index, value) {
        this.handleChange(prop, value);
    };
    TutorialInfo.prototype.handleChange = function (prop, val) {
        var obj = {};
        obj[prop] = val;
        this.setState({ pj: Object.assign({}, this.state, obj) });
    };
    TutorialInfo.prototype.save = function () {
        this.props.save(this.state.pj);
    };
    TutorialInfo.prototype.render = function () {
        return (React.createElement(Card_1.Card, {style: styles}, React.createElement(Card_1.CardHeader, {title: 'Tutorial Info'}), React.createElement(TextField_1.default, {floatingLabelText: 'Title', defaultValue: this.state.pj.name, onChange: this.handleText.bind(this, 'name')}), React.createElement("br", null), React.createElement(TextField_1.default, {floatingLabelText: 'Description', defaultValue: this.state.pj.description, onChange: this.handleText.bind(this, 'description')}), React.createElement("br", null), React.createElement(TextField_1.default, {floatingLabelText: 'Version', defaultValue: this.state.pj.version, disabled: true, onChange: this.handleText.bind(this, 'version')}), React.createElement("br", null), React.createElement(TextField_1.default, {floatingLabelText: 'Keywords', defaultValue: this.state.pj.keywords.join(', '), multiLine: true, onChange: this.handleText.bind(this, 'keywords')}), React.createElement("br", null), React.createElement(RaisedButton_1.default, {style: buttonStyles, label: 'Save', primary: true, onTouchTap: this.save.bind(this)}), React.createElement(RaisedButton_1.default, {style: buttonStyles, label: 'Continue', secondary: true, onTouchTap: this.props.routeToTutorial.bind(this)})));
    };
    TutorialInfo = __decorate([
        react_redux_1.connect(null, function (dispatch) {
            return {
                save: function (pj) { return dispatch(actions_1.pjSave(pj)); },
                routeToTutorial: function () { return dispatch(actions_1.routeSet('page')); }
            };
        }), 
        __metadata('design:paramtypes', [Object])
    ], TutorialInfo);
    return TutorialInfo;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TutorialInfo;