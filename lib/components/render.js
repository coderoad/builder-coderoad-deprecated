"use strict";
var ReactDOM = require('react-dom');
var store_1 = require('../store');
var SideRoot_1 = require('./SidePanel/SideRoot');
function render(target) {
    ReactDOM.render(SideRoot_1.default(store_1.default), target);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = render;
