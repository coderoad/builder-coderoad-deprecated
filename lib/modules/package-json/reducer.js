"use strict";
var types_1 = require('./types');
var packageJson_1 = require('./utils/packageJson');
var sort_package_json_1 = require('sort-package-json');
var _pj = {
    name: 'coderoad-',
    version: '0.1.0',
    author: '',
    description: '',
    main: 'coderoad.json',
    files: ['coderoad.json', 'tutorial'],
    keywords: ['coderoad', 'tutorial'],
    config: {
        language: 'JS',
        runner: 'mocha-coderoad',
        runnerOptions: {}
    },
    engines: {
        node: '>=0.10.3'
    }
};
var defaultPJ = {};
function tutorialConfig(p, action) {
    if (p === void 0) { p = _pj; }
    switch (action.type) {
        case types_1.PJ_SAVE:
            var _a = action.payload, pj = _a.pj, dir = _a.dir;
            var pjExists = packageJson_1.readPackageJson(dir);
            var nextPj = !!pjExists
                ? Object.assign({}, pjExists, pj)
                : pj;
            var content = sort_package_json_1.sortPackageJson(JSON.stringify(nextPj, null, 2));
            packageJson_1.writePackageJson(dir, content);
            return nextPj;
        default:
            return p;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = tutorialConfig;
