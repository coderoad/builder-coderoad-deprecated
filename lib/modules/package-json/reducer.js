"use strict";
var types_1 = require('./types');
var packageJson_1 = require('./utils/packageJson');
var _config = {
    name: 'coderoad-',
    version: '0.1.0',
    description: '',
    keywords: ['coderoad', 'tutorial'],
    config: {
        language: 'JS',
        runner: 'mocha-coderoad',
        runnerOptions: {}
    }
};
var defaultPJ = {};
function tutorialConfig(c, action) {
    if (c === void 0) { c = _config; }
    switch (action.type) {
        case types_1.TUTORIAL_CONFIG_SAVE:
            var _a = action.payload, config = _a.config, dir = _a.dir;
            var pj = packageJson_1.readPackageJson(dir);
            var content = !!pj
                ? Object.assign({}, pj, config)
                : config;
            packageJson_1.writePackageJson(dir, content);
            return action.payload.config;
        case types_1.TUTORIAL_INFO_SAVE:
            return action.payload.info;
        default:
            return c;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = tutorialConfig;
