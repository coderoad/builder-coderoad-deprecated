"use strict";
var types_1 = require('./types');
function pageSet(pagePosition) {
    return { type: types_1.PAGE_SET, payload: { pagePosition: pagePosition } };
}
exports.pageSet = pageSet;
