"use strict";
var types_1 = require('./types');
var coderoad_cli_1 = require('coderoad-cli');
var _v = {
    errors: [],
    warnings: [],
};
function validation(v, action) {
    if (v === void 0) { v = _v; }
    switch (action.type) {
        case types_1.VALIDATE_TUTORIAL:
            return coderoad_cli_1.validatePackageJson(action.payload.packageJson);
        case types_1.RUN_TEST_ON_SOLUTION:
            console.log(action.payload.text);
            return v;
        default:
            return v;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = validation;
