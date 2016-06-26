"use strict";
var loadRunner_1 = require('./loadRunner');
var RUNNER_SET = 'RUNNER_SET';
function runnerSet(name) {
    return function (dispatch, getState) {
        var dir = getState().dir;
        dispatch({ type: RUNNER_SET, payload: { dir: dir, name: name } });
    };
}
exports.runnerSet = runnerSet;
var r = function () {
    alert('Runner not installed. Run "npm install"');
};
function reducer(runner, action) {
    if (runner === void 0) { runner = r; }
    switch (action.type) {
        case RUNNER_SET:
            var _a = action.payload, dir = _a.dir, name_1 = _a.name;
            return loadRunner_1.default(dir, name_1);
        default:
            return runner;
    }
}
exports.reducer = reducer;
