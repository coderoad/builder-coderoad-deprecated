"use strict";
var types_1 = require('./types');
function tutorialConfigSave(config) {
    return { type: types_1.TUTORIAL_CONFIG_SAVE, payload: { config: config } };
}
exports.tutorialConfigSave = tutorialConfigSave;
