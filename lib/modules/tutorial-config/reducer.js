"use strict";
var types_1 = require('./types');
var packageJson_1 = require('./utils/packageJson');
var _config = {
    name: 'coderoad-',
    repo: '',
    language: 'JS',
    runner: 'mocha-coderoad',
    runnerOptions: {}
};
var defaultPJ = {};
function tutorialConfig(c, action) {
    if (c === void 0) { c = _config; }
    switch (action.type) {
        case types_1.TUTORIAL_CONFIG_SAVE:
            var pj = packageJson_1.readPackageJson(action.payload.dir);
            var content = {};
            if (pj) {
                content = Object.assign({}, pj, action.payload.config);
                console.log(content);
            }
            else {
                content = action.payload.config;
            }
            packageJson_1.writePackageJson(action.payload.dir, content);
            return action.payload.config;
        default:
            return c;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = tutorialConfig;
