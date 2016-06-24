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
var Dialog_1 = require('material-ui/Dialog');
var FlatButton_1 = require('material-ui/FlatButton');
var RaisedButton_1 = require('material-ui/RaisedButton');
var actions_1 = require('../../actions');
var styles = {
    cancel: {
        float: 'right',
    },
};
var PublishOptionsModal = (function (_super) {
    __extends(PublishOptionsModal, _super);
    function PublishOptionsModal() {
        _super.apply(this, arguments);
    }
    PublishOptionsModal.prototype.publish = function (type) {
        this.props.tutorialPublish(type);
    };
    PublishOptionsModal.prototype.render = function () {
        return (React.createElement("div", null, 
            React.createElement(Dialog_1.default, {title: 'Dialog With Actions', modal: true, open: this.props.open, onRequestClose: this.props.handleClose}, 
                "Select version change:", 
                React.createElement(FlatButton_1.default, {label: 'Patch', primary: true, disabled: false, onTouchTap: this.publish.bind(this, 'patch')}), 
                React.createElement(FlatButton_1.default, {label: 'Minor', disabled: false, onTouchTap: this.publish.bind(this, 'minor')}), 
                React.createElement(FlatButton_1.default, {label: 'Major', disabled: false, onTouchTap: this.publish.bind(this, 'major')}), 
                React.createElement("br", null), 
                React.createElement(RaisedButton_1.default, {style: styles.cancel, label: 'Cancel', secondary: true, onTouchTap: this.props.handleClose}))
        ));
    };
    PublishOptionsModal = __decorate([
        react_redux_1.connect(null, { tutorialPublish: actions_1.tutorialPublish }), 
        __metadata('design:paramtypes', [])
    ], PublishOptionsModal);
    return PublishOptionsModal;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PublishOptionsModal;
