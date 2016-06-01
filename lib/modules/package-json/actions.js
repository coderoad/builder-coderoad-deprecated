"use strict";
var types_1 = require('./types');
function tutorialConfigSave(config) {
    return function (dispatch, getState) {
        var dir = getState().dir;
        dispatch({ type: types_1.TUTORIAL_CONFIG_SAVE, payload: { config: config, dir: dir } });
    };
}
exports.tutorialConfigSave = tutorialConfigSave;
function tutorialInfoSave(info) {
    return { type: types_1.TUTORIAL_INFO_SAVE, payload: { info: info } };
}
exports.tutorialInfoSave = tutorialInfoSave;
