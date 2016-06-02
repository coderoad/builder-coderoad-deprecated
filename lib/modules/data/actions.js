"use strict";
var types_1 = require('./types');
function dataLoad() {
    return function (dispatch, getState) {
        var dir = getState().dir;
        dispatch({ type: types_1.DATA_LOAD, payload: { dir: dir } });
    };
}
exports.dataLoad = dataLoad;
