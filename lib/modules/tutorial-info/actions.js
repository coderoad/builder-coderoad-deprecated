"use strict";
var types_1 = require('./types');
function tutorialInfoSave(info) {
    return { type: types_1.TUTORIAL_INFO_SAVE, payload: { info: info } };
}
exports.tutorialInfoSave = tutorialInfoSave;
