"use strict";
var store_1 = require('../../store');
var actions_1 = require('../../actions');
function handleResult(result) {
    console.log('handleResult', result);
    return store_1.default.dispatch(actions_1.testResult(result));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handleResult;
