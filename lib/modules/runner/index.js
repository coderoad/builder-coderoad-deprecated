"use strict";
var loadRunner_1 = require('./loadRunner');
var RUNNER_SET = 'RUNNER_SET';
var RUNNER_RUN = 'RUNNER_RUN';
function runnerSet(name) {
    return function (dispatch, getState) {
        var dir = getState().dir;
        dispatch({ type: RUNNER_SET, payload: { dir: dir, name: name } });
    };
}
exports.runnerSet = runnerSet;
function runnerRun(content) {
    return function (dispatch, getState) {
        dispatch({ type: RUNNER_RUN, payload: { content: content } });
    };
}
exports.runnerRun = runnerRun;
var r = function (content) {
    console.log(content);
    alert('Runner not installed. Try running "npm install"');
};
function reducer(runner, action) {
    if (runner === void 0) { runner = r; }
    switch (action.type) {
        case RUNNER_SET:
            var _a = action.payload, dir = _a.dir, name_1 = _a.name;
            return loadRunner_1.default(dir, name_1);
        case RUNNER_RUN:
            var content = action.payload.content;
            runner(content);
            return runner;
        default:
            return runner;
    }
}
exports.reducer = reducer;
