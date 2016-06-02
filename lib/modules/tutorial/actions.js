"use strict";
var types_1 = require('./types');
function tutorialInit() {
    return function (dispatch, getState) {
        var _a = getState(), dir = _a.dir, packageJson = _a.packageJson;
        dispatch({ type: types_1.TUTORIAL_INIT, payload: { dir: dir, name: packageJson.name } });
        dispatch(tutorialBuild());
        dispatch(tutorialLoad());
    };
}
exports.tutorialInit = tutorialInit;
function tutorialLoad() {
    return function (dispatch, getState) {
        var dir = getState().dir;
        dispatch({ type: types_1.TUTORIAL_LOAD, payload: { dir: dir } });
    };
}
exports.tutorialLoad = tutorialLoad;
function tutorialBuild() {
    return function (dispatch, getState) {
        var dir = getState().dir;
        dispatch({ type: types_1.TUTORIAL_BUILD, payload: { dir: dir } });
    };
}
exports.tutorialBuild = tutorialBuild;
function tutorialPageAdd() {
    console.log('called tutorialPageAdd');
    return { type: types_1.TUTORIAL_PAGE_ADD };
}
exports.tutorialPageAdd = tutorialPageAdd;
