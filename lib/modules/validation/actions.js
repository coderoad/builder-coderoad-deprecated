"use strict";
var types_1 = require('./types');
function validatePj() {
    return function (dispatch, getState) {
        var packageJson = getState().packageJson;
        dispatch({ type: types_1.VALIDATE_PJ, payload: { packageJson: packageJson } });
    };
}
exports.validatePj = validatePj;
