"use strict";
var types_1 = require('./types');
var fs_1 = require('fs');
var path_1 = require('path');
var _d = {};
function dataReducer(d, action) {
    if (d === void 0) { d = _d; }
    switch (action.type) {
        case types_1.DATA_LOAD:
            var dir = action.payload.dir;
            var data = JSON.parse(fs_1.readFileSync(path_1.join(dir, 'coderoad.json'), 'utf8'));
            console.log(data);
            return data;
        default:
            return d;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = dataReducer;
