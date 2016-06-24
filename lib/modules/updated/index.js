"use strict";
var TUTORIAL_UPDATED = 'TUTORIAL_UPDATED';
function tutorialUpdated(isUpdated) {
    if (isUpdated === void 0) { isUpdated = false; }
    return { type: TUTORIAL_UPDATED, payload: { isUpdated: isUpdated } };
}
exports.tutorialUpdated = tutorialUpdated;
function reducer(isUpdated, action) {
    if (isUpdated === void 0) { isUpdated = false; }
    switch (action.type) {
        case TUTORIAL_UPDATED:
            return action.payload.isUpdated;
        default:
            return isUpdated;
    }
}
exports.reducer = reducer;
