"use strict";
var types_1 = require('./types');
var readFile_1 = require('../utils/readFile');
var writeFile_1 = require('../utils/writeFile');
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
function packageJson(p, action) {
    if (p === void 0) { p = _pj; }
    switch (action.type) {
        case types_1.PJ_LOAD:
            var loadedPj = readFile_1.default(action.payload.dir, 'package.json');
            if (!loadedPj) {
                var content_1 = sort_package_json_1.sortPackageJson(JSON.stringify(p, null, 2));
                writeFile_1.default(action.payload.dir, 'package.json', content_1);
                return p;
            }
            return loadedPj;
        case types_1.PJ_SAVE:
            var _a = action.payload, pj = _a.pj, dir = _a.dir;
            var pjExists = readFile_1.default(dir, 'package.json');
            var nextPj = !!pjExists
                ? Object.assign({}, pjExists, pj)
                : pj;
            var content = sort_package_json_1.sortPackageJson(JSON.stringify(nextPj, null, 2));
            writeFile_1.default(dir, 'package.json', content);
            return nextPj;
        default:
            return p;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = packageJson;
