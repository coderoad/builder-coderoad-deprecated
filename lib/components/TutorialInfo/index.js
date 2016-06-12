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
var Top_1 = require('../TopPanel/Top');
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
    function TutorialInfo(props) {
        _super.call(this, props);
        var _a = this.props.packageJson, description = _a.description, version = _a.version, keywords = _a.keywords;
        this.state = {
            description: description || '',
            version: version || '0.1.0',
            keywords: keywords || [],
        };
    }
    TutorialInfo.prototype.componentDidMount = function () {
        Top_1.default.toggle(false);
    };
    TutorialInfo.prototype.handleText = function (prop, event, value) {
        var next = {};
        next[prop] = value;
        this.setState(Object.assign({}, this.state, next));
    };
    TutorialInfo.prototype.submit = function () {
        var _a = this.state, description = _a.description, version = _a.version, keywords = _a.keywords;
        this.props.save(Object.assign({}, this.props.packageJson, { description: description, version: version, keywords: keywords }));
    };
    TutorialInfo.prototype.render = function () {
        var _a = this.state, description = _a.description, version = _a.version, keywords = _a.keywords;
        return (React.createElement(Card_1.Card, {style: styles.card}, React.createElement(Card_1.CardHeader, {title: 'Tutorial Info'}), React.createElement(TextField_1.default, {className: 'native-key-bindings', floatingLabelText: 'Description', defaultValue: description, onChange: this.handleText.bind(this, 'description')}), React.createElement("br", null), React.createElement(TextField_1.default, {className: 'native-key-bindings', floatingLabelText: 'Version', defaultValue: version, disabled: true, onChange: this.handleText.bind(this, 'version')}), React.createElement("br", null), React.createElement("br", null), React.createElement(RaisedButton_1.default, {type: 'submit', style: styles.button, label: 'Save', primary: true, onTouchTap: this.submit.bind(this)}), React.createElement(RaisedButton_1.default, {style: styles.button, label: 'Continue', secondary: true, onTouchTap: this.props.routeToTutorial.bind(this)})));
    };
    TutorialInfo = __decorate([
        react_redux_1.connect(function (state) { return ({
            packageJson: state.packageJson,
        }); }, function (dispatch) { return ({
            save: function (pj) { return dispatch(actions_1.pjSave(pj)); },
            routeToTutorial: function () { return dispatch(actions_1.routeSet('page')); }
        }); }), 
        __metadata('design:paramtypes', [Object])
    ], TutorialInfo);
    return TutorialInfo;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TutorialInfo;
