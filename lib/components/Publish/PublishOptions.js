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
var actions_1 = require('../../actions');
var Dialog_1 = require('material-ui/Dialog');
var FlatButton_1 = require('material-ui/FlatButton');
var RaisedButton_1 = require('material-ui/RaisedButton');
var styles = {
    dialog: {
        textAlign: 'center',
    },
    cancel: {
        float: 'right',
    },
    note: {
        float: 'left',
    },
};
var PublishOptionsModal = (function (_super) {
    __extends(PublishOptionsModal, _super);
    function PublishOptionsModal() {
        _super.apply(this, arguments);
    }
    PublishOptionsModal.prototype.render = function () {
        var _a = this.props, open = _a.open, handleClose = _a.handleClose, version = _a.version, updated = _a.updated;
        return (React.createElement("div", null, React.createElement(Dialog_1.default, {style: styles.dialog, title: 'Publish Next Version', modal: true, open: open, onRequestClose: handleClose}, React.createElement("h2", null, "Current: v", version), !updated
            ? React.createElement("p", null, "Cannot publish. Tutorial has not changed.")
            : React.createElement("p", null, "Describe the semver change:"), React.createElement("br", null), React.createElement(FlatButton_1.default, {label: 'Patch', primary: true, disabled: !updated, onTouchTap: this.publish.bind(this, 'patch')}), React.createElement(FlatButton_1.default, {label: 'Minor', disabled: !updated, onTouchTap: this.publish.bind(this, 'minor')}), React.createElement(FlatButton_1.default, {label: 'Major', disabled: !updated, onTouchTap: this.publish.bind(this, 'major')}), React.createElement("br", null), React.createElement("br", null), React.createElement("p", {style: styles.note}, "What is ", React.createElement("a", {href: 'http://semver.org/'}, "semver"), "?"), React.createElement(RaisedButton_1.default, {style: styles.cancel, label: 'Cancel', secondary: true, onTouchTap: handleClose}))));
    };
    PublishOptionsModal.prototype.publish = function (type) {
        this.props.tutorialPublish(type);
        this.props.handleClose();
    };
    PublishOptionsModal = __decorate([
        react_redux_1.connect(function (state) { return ({
            version: state.packageJson.version || 'ERROR',
            updated: state.updated,
        }); }, { tutorialPublish: actions_1.tutorialPublish }), 
        __metadata('design:paramtypes', [])
    ], PublishOptionsModal);
    return PublishOptionsModal;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PublishOptionsModal;
