"use strict";
var path_1 = require('path');
var actions_1 = require('../../actions');
var config_options_1 = require('../../config-options');
var twoDigitify_1 = require('../../services/twoDigitify');
function editorMarkdownOpen(index, content) {
    console.log(index, content);
    return function (dispatch, getState) {
        var filePath = path_1.join('tutorial', twoDigitify_1.default(index + 1 || getState().pagePosition + 1), 'index.md');
        dispatch(actions_1.editorOpen(filePath));
        if (content) {
            content = content.replace(/↵/mg, '\n');
            dispatch(actions_1.editorScroll(content));
        }
    };
}
exports.editorMarkdownOpen = editorMarkdownOpen;
function editorTestOpen(pageIndex, testIndex) {
    return function (dispatch, getState) {
        var suffix = config_options_1.default[getState().packageJson.config].suffix;
        var filePath = path_1.join('tutorial', twoDigitify_1.default(pageIndex || getState().pagePosition), twoDigitify_1.default(testIndex) + '.' + suffix);
        dispatch(actions_1.editorOpen(filePath));
    };
}
exports.editorTestOpen = editorTestOpen;
