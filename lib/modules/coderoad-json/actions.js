"use strict";
var types_1 = require('./types');
function cjLoad() {
    return function (dispatch, getState) {
        var dir = getState().dir;
        dispatch({ type: types_1.CJ_LOAD, payload: { dir: dir } });
    };
}
exports.cjLoad = cjLoad;
function cjSave(cj) {
    return function (dispatch, getState) {
        var dir = getState().dir;
        dispatch({ type: types_1.CJ_SAVE, payload: { cj: cj, dir: dir } });
    };
}
exports.cjSave = cjSave;
