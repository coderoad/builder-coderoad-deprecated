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
var path_1 = require('path');
var TextField_1 = require('material-ui/TextField');
var SelectField_1 = require('material-ui/SelectField');
var Card_1 = require('material-ui/Card');
var RaisedButton_1 = require('material-ui/RaisedButton');
var actions_1 = require('../../actions');
var languageItems_1 = require('./languageItems');
var runnerItems_1 = require('./runnerItems');
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
var TutorialConfig = (function (_super) {
    __extends(TutorialConfig, _super);
    function TutorialConfig(props) {
        _super.call(this, props);
        this.state = {
            pj: this.props.packageJson
        };
    }
    TutorialConfig.prototype.handleText = function (prop, event) {
        this.handleChange(prop, event.target.value);
    };
    TutorialConfig.prototype.handleSelect = function (prop, event, index, value) {
        this.handleChange(prop, value);
    };
    TutorialConfig.prototype.handleChange = function (prop, val) {
        var obj = {};
        obj[prop] = val;
        var target = null;
        switch (prop) {
            case 'name':
                this.setState({ pj: Object.assign({}, this.state.pj, obj) });
                break;
            case 'language':
            case 'runner':
                var config = Object.assign({}, this.state.pj.config, obj);
                var pj = Object.assign({}, this.state.pj, { config: config });
                this.setState({ pj: pj });
                return;
            case 'repo':
                var repo = {
                    repository: {
                        type: 'git',
                        url: prop
                    },
                    bugs: {
                        url: path_1.resolve(prop, 'issues')
                    }
                };
                this.setState({ pj: Object.assign({}, this.state.pj, repo) });
                return;
        }
    };
    TutorialConfig.prototype.save = function () {
        this.props.save(this.state.pj);
    };
    TutorialConfig.prototype.render = function () {
        var pj = this.state.pj;
        return (React.createElement(Card_1.Card, {style: styles.card}, React.createElement(Card_1.CardHeader, {title: 'Tutorial Configuration'}), React.createElement(TextField_1.default, {floatingLabelText: 'Tutorial Package Name', defaultValue: pj.name, onChange: this.handleText.bind(this, 'name')}), React.createElement("br", null), React.createElement(SelectField_1.default, {floatingLabelText: 'Language', value: pj.config.language, onChange: this.handleSelect.bind(this, 'language')}, languageItems_1.default()), React.createElement("br", null), React.createElement(SelectField_1.default, {floatingLabelText: 'Test Runner', value: pj.config.runner, onChange: this.handleSelect.bind(this, 'runner')}, runnerItems_1.default(pj.config.language)), React.createElement("br", null), React.createElement(RaisedButton_1.default, {style: styles.button, label: 'Save', primary: true, onTouchTap: this.save.bind(this)}), React.createElement(RaisedButton_1.default, {style: styles.button, label: 'Continue', secondary: true, onTouchTap: this.props.routeToInfo.bind(this)})));
    };
    TutorialConfig = __decorate([
        react_redux_1.connect(null, function (dispatch) {
            return {
                save: function (pj) { return dispatch(actions_1.tutorialConfigSave(pj)); },
                routeToPage: function () { return dispatch(actions_1.routeSet('page')); }
            };
        }), 
        __metadata('design:paramtypes', [Object])
    ], TutorialConfig);
    return TutorialConfig;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TutorialConfig;
