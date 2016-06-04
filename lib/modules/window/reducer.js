"use strict";
var types_1 = require('./types');
var Top_1 = require('../../components/TopPanel/Top');
function windowToggle(open, action) {
    if (open === void 0) { open = false; }
    switch (action.type) {
        case types_1.WINDOW_TOGGLE:
            if (open) {
                Top_1.default.toggle(false);
            }
            else if (!open && action.payload.route === 'page') {
                Top_1.default.toggle(true);
            }
            return !open;
        default:
            return open;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = windowToggle;
