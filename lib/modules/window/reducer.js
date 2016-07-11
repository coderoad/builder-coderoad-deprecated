"use strict";
var TopPanel_1 = require('../../components/TopPanel');
var types_1 = require('./types');
function windowToggle(open, action) {
    if (open === void 0) { open = false; }
    switch (action.type) {
        case types_1.QUIT:
            return false;
        case types_1.WINDOW_TOGGLE:
            if (open) {
                TopPanel_1.topElement.toggle(false);
            }
            else if (!open && action.payload.route === 'page') {
                TopPanel_1.topElement.toggle(true);
            }
            return !open;
        default:
            return open;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = windowToggle;
