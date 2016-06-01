"use strict";
var types_1 = require('./types');
function tutorialInit() {
    return function (dispatch, getState) {
        var name = getState().packageJson.name;
        dispatch({ type: types_1.TUTORIAL_INIT, payload: { name: name } });
    };
}
exports.tutorialInit = tutorialInit;
