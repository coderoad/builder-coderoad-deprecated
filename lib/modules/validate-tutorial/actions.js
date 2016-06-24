"use strict";
var types_1 = require('./types');
function validateTutorial() {
    return function (dispatch, getState) {
        var packageJson = getState().packageJson;
        dispatch({ type: types_1.VALIDATE_TUTORIAL, payload: { packageJson: packageJson } });
    };
}
exports.validateTutorial = validateTutorial;
