"use strict";
var RUNNER_SET = 'RUNNER_SET';
function runnerSet(name) {
    return { type: RUNNER_SET, payload: { name: name } };
}
exports.runnerSet = runnerSet;
var r = function () {
    alert('Runner not installed. Run "npm install"');
};
function reducer(runner, action) {
    if (runner === void 0) { runner = r; }
    switch (action.type) {
        case RUNNER_SET:
            var name_1 = action.payload.name;
            console.log(name_1);
            return runner;
        default:
            return runner;
    }
}
exports.reducer = reducer;
