"use strict";
var path_1 = require('path');
var actions_1 = require('../../actions');
var config_options_1 = require('../../config-options');
function twoDigitify(n) {
    return n > 9 ? '' + n : '0' + n;
}
function editorOpenPage(index) {
    return function (dispatch) {
        var filePath = path_1.join('tutorial', twoDigitify(index + 1), 'index.md');
        dispatch(actions_1.editorOpen(filePath));
    };
}
exports.editorOpenPage = editorOpenPage;
function editorOpenTest(pageIndex, testIndex) {
    return function (dispatch, getState) {
        var suffix = config_options_1.default[getState().packageJson.config].suffix;
        var filePath = path_1.join('tutorial', twoDigitify(pageIndex), twoDigitify(testIndex) + '.' + suffix);
        dispatch(actions_1.editorOpen(filePath));
    };
}
exports.editorOpenTest = editorOpenTest;
