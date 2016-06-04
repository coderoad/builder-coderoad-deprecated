"use strict";
var types_1 = require('./types');
function windowToggle() {
    return function (dispatch, getState) {
        var route = getState().route;
        dispatch({ type: types_1.WINDOW_TOGGLE, payload: { route: route } });
    };
}
exports.windowToggle = windowToggle;
