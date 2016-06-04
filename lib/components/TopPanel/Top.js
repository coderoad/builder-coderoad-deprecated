"use strict";
var _this = this;
var ReactDOM = require('react-dom');
var Top = {
    top: null,
    init: function () {
        _this.top = document.createElement('div');
        _this.top.setAttribute('id', 'crb-top');
        _this.top.style.height = '33px';
        Top.toggle(false);
        return _this.top;
    },
    toggle: function (open) {
        _this.top.hidden = !open;
    },
    unmount: function () {
        ReactDOM.unmountComponentAtNode(_this.root);
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Top;
