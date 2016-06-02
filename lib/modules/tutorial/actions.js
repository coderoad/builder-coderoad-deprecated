"use strict";
var types_1 = require('./types');
function tutorialInit() {
    return function (dispatch, getState) {
        var _a = getState(), dir = _a.dir, packageJson = _a.packageJson;
        dispatch({ type: types_1.TUTORIAL_INIT, payload: { dir: dir, name: packageJson.name } });
    };
}
exports.tutorialInit = tutorialInit;
