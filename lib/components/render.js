"use strict";
var ReactDOM = require('react-dom');
var store_1 = require('../store');
var SidePanelRoot_1 = require('./SidePanel/SidePanelRoot');
var injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();
function render(target) {
    ReactDOM.render(SidePanelRoot_1.default(store_1.default), target);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = render;
