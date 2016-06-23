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
var Table_1 = require('material-ui/Table');
var Card_1 = require('material-ui/Card');
var RaisedButton_1 = require('material-ui/RaisedButton');
var actions_1 = require('../../actions');
var TopPanel_1 = require('../TopPanel');
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
var TutorialPublish = (function (_super) {
    __extends(TutorialPublish, _super);
    function TutorialPublish() {
        _super.apply(this, arguments);
    }
    TutorialPublish.prototype.componentWillMount = function () {
        this.props.pjLoad();
        this.props.editorPjOpen();
    };
    TutorialPublish.prototype.componentDidMount = function () {
        TopPanel_1.topElement.toggle(false);
    };
    TutorialPublish.prototype.render = function () {
        var _a = this.props, validation = _a.validation, validatePj = _a.validatePj;
        return (React.createElement(Card_1.Card, {style: styles.card}, 
            React.createElement(Card_1.CardHeader, {title: 'Tutorial Info'}), 
            React.createElement(Table_1.Table, {fixedHeader: true, selectable: false}, 
                React.createElement(Table_1.TableHeader, {displaySelectAll: false, adjustForCheckbox: false}, 
                    React.createElement(Table_1.TableRow, null, 
                        React.createElement(Table_1.TableHeaderColumn, null, "Status"), 
                        React.createElement(Table_1.TableHeaderColumn, null, "Field"), 
                        React.createElement(Table_1.TableHeaderColumn, null, "Description"))
                ), 
                React.createElement(Table_1.TableBody, {displayRowCheckbox: false}, 
                    validation.errors.map(function (field, index) { return (React.createElement(Table_1.TableRow, {key: index}, 
                        React.createElement(Table_1.TableRowColumn, null, "Error"), 
                        React.createElement(Table_1.TableRowColumn, null, field.name), 
                        React.createElement(Table_1.TableRowColumn, null, field.example))); }), 
                    validation.warnings.map(function (field, index) { return (React.createElement(Table_1.TableRow, {key: index}, 
                        React.createElement(Table_1.TableRowColumn, null, "Warning"), 
                        React.createElement(Table_1.TableRowColumn, null, field.name), 
                        React.createElement(Table_1.TableRowColumn, null, field.example))); }))), 
            React.createElement(RaisedButton_1.default, {style: styles.button, label: 'Validate', primary: true, onTouchTap: validatePj}), 
            React.createElement(RaisedButton_1.default, {style: styles.button, label: 'Publish', secondary: true, disabled: validation.errors.length === 0, onTouchTap: function () { return alert('Publish not yet implemented'); }})));
    };
    TutorialPublish = __decorate([
        react_redux_1.connect(function (state) { return ({
            validation: state.validation,
        }); }, { pjLoad: actions_1.pjLoad, pjSave: actions_1.pjSave, editorPjOpen: actions_1.editorPjOpen, validatePj: actions_1.validatePj }), 
        __metadata('design:paramtypes', [])
    ], TutorialPublish);
    return TutorialPublish;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TutorialPublish;
