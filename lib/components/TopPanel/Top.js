"use strict";
var _this = this;
var ReactDOM = require('react-dom');
var Top = {
    top: null,
    init: function () {
        _this.top = document.createElement('div');
        _this.top.setAttribute('id', 'crb-top');
        _this.top.style.height = '33px';
        return _this.top;
    },
    unmount: function () {
        ReactDOM.unmountComponentAtNode(_this.root);
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Top;
