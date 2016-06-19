"use strict";
var path_1 = require('path');
var actions_1 = require('../../actions');
var core_coderoad_1 = require('core-coderoad');
var twoDigitify_1 = require('../../services/twoDigitify');
function editorMarkdownOpen(content, index) {
    return function (dispatch, getState) {
        var filePath = path_1.join('tutorial', twoDigitify_1.default(index ? index + 1 : getState().pagePosition + 1), 'index.md');
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
        var suffix = core_coderoad_1.tutorialConfigOptions[getState().packageJson.config].language.suffix;
        var filePath = path_1.join('tutorial', twoDigitify_1.default(pageIndex || getState().pagePosition), twoDigitify_1.default(testIndex) + '.' + suffix);
        dispatch(actions_1.editorOpen(filePath));
    };
}
exports.editorTestOpen = editorTestOpen;
function editorPjOpen() {
    return function (dispatch, getState) {
        var dir = getState().dir;
        dispatch(actions_1.editorOpen('package.json'));
    };
}
exports.editorPjOpen = editorPjOpen;
