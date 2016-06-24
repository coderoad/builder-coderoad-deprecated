"use strict";
var types_1 = require('./types');
var readFile_1 = require('../utils/readFile');
var writeFile_1 = require('../utils/writeFile');
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
function coderoadJson(p, action) {
    if (p === void 0) { p = _pj; }
    switch (action.type) {
        case types_1.CJ_LOAD:
            var loadedCj = readFile_1.default(action.payload.dir, 'coderoad.json');
            return !!loadedCj ? loadedCj : p;
        case types_1.CJ_SAVE:
            var _a = action.payload, pj = _a.pj, dir = _a.dir;
            var cjExists = readFile_1.default(dir, 'coderoad.json');
            var nextCj = !!cjExists
                ? Object.assign({}, cjExists, pj)
                : pj;
            var content = JSON.stringify(nextCj, null, 2);
            writeFile_1.default(dir, 'coderoad.json', content);
            return nextCj;
        default:
            return p;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = coderoadJson;
