"use strict";
var types_1 = require('./types');
var _info = {
    name: '',
    description: '',
    version: [0, 1, 0],
    keywords: ['coderoad', 'tutorial'],
};
function tutorialConfig(i, action) {
    if (i === void 0) { i = _info; }
    switch (action.type) {
        case types_1.TUTORIAL_INFO_SAVE:
            return action.payload.info;
        default:
            return i;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = tutorialConfig;
