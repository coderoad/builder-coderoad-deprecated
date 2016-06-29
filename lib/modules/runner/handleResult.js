"use strict";
function handleResult(result) {
    var msg = result.msg, change = result.change;
    console.log({
        msg: msg,
        passed: change > 0,
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handleResult;
