"use strict";
var ReactDOM = require('react-dom');
var Top = {
    top: null,
    init: function () {
        this.top = document.createElement('div');
        this.top.setAttribute('id', 'crb-top');
        this.top.style.height = '33px';
        Top.toggle(false);
        return this.top;
    },
    toggle: function (open) {
        this.top.hidden = !open;
    },
    unmount: function () {
        ReactDOM.unmountComponentAtNode(this.root);
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Top;
