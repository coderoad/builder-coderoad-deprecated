"use strict";
var types_1 = require('./types');
var _config = {
    name: 'coderoad-',
    repo: '',
    language: 'JS',
    runner: 'mocha-coderoad',
    runnerOptions: {}
};
function tutorialConfig(c, action) {
    if (c === void 0) { c = _config; }
    switch (action.type) {
        case types_1.TUTORIAL_CONFIG_SAVE:
            return action.payload.config;
        default:
            return c;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = tutorialConfig;
