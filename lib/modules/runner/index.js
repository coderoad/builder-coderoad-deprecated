"use strict";
var loadRunner_1 = require('./loadRunner');
var RUNNER_SET = 'RUNNER_SET';
var RUNNER_RUN = 'RUNNER_RUN';
function runnerSet() {
    return function (dispatch, getState) {
        var _a = getState(), dir = _a.dir, packageJson = _a.packageJson;
        if (packageJson && packageJson.config && packageJson.config.runner) {
            var name_1 = packageJson.config.runner;
            dispatch({ type: RUNNER_SET, payload: { dir: dir, name: name_1 } });
        }
    };
}
exports.runnerSet = runnerSet;
function runnerRun(content) {
    return function (dispatch, getState) {
        var _a = getState(), dir = _a.dir, tutorial = _a.tutorial;
        var config = Object.assign({}, dir, tutorial.config);
        dispatch({ type: RUNNER_RUN, payload: { content: content, config: config } });
    };
}
exports.runnerRun = runnerRun;
var r = function (content) {
    console.log(content);
    alert('Runner not yet implemented.');
};
function reducer(runner, action) {
    if (runner === void 0) { runner = r; }
    switch (action.type) {
        case RUNNER_SET:
            var _a = action.payload, dir = _a.dir, name_2 = _a.name;
            return loadRunner_1.default(dir, name_2);
        case RUNNER_RUN:
            var _b = action.payload, content = _b.content, config = _b.config;
            r(content);
            return runner;
        default:
            return runner;
    }
}
exports.reducer = reducer;
