"use strict";
function getTaskObject(a) {
    var obj = {
        action: a.substring(0, a.indexOf('(')),
        content: a.substring(a.indexOf('(') + 2, a.length - 2)
    };
    if (obj.action === 'open') {
        obj.singleLine = true;
    }
    return obj;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = getTaskObject;
