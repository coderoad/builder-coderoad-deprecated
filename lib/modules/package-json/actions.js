"use strict";
var types_1 = require('./types');
function tutorialConfigSave(pj) {
    return function (dispatch, getState) {
        var dir = getState().dir;
        dispatch({ type: types_1.PJ_SAVE, payload: { pj: pj, dir: dir } });
    };
}
exports.tutorialConfigSave = tutorialConfigSave;
