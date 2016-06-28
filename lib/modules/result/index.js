"use strict";
var TEST_RESULT = 'TEST_RESULT';
function testResult(result) {
    console.log('action', result);
    return { type: TEST_RESULT, payload: { result: result } };
}
exports.testResult = testResult;
function reducer(res, action) {
    if (res === void 0) { res = {}; }
    switch (action.type) {
        case TEST_RESULT:
            console.log(action.payload.result);
            return action.payload.result;
        default:
            return res;
    }
}
exports.reducer = reducer;
