"use strict";
var path_1 = require('path');
var actions_1 = require('../../actions');
var core_coderoad_1 = require('core-coderoad');
var twoDigitify_1 = require('../../services/twoDigitify');
function editorMarkdownOpen(content, index) {
    return function (dispatch, getState) {
        var pagePosition = getState().pagePosition;
        var filePath = path_1.join('tutorial', twoDigitify_1.default(index ? index + 1 : pagePosition + 1), 'index.md');
        dispatch(actions_1.editorOpen(filePath));
        setTimeout(function () {
            if (content) {
                content = content.replace(/↵/mg, '\n');
                dispatch(actions_1.editorScroll(content));
            }
        });
    };
}
exports.editorMarkdownOpen = editorMarkdownOpen;
function editorTestOpen(file) {
    return function (dispatch, getState) {
        var configLanguage = getState().packageJson.config.language;
        if (!configLanguage) {
            return;
        }
        var suffix = core_coderoad_1.tutorialConfigOptions[configLanguage].language.suffix;
        if (!suffix) {
            return;
        }
        var filePath = path_1.join('tutorial', file + '.' + suffix);
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
