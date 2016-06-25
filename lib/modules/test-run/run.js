"use strict";
var parse_loaders_1 = require('./parse-loaders');
function handleResult() { return; }
function runTaskTests(taskTests, dir, taskPosition) {
    if (taskPosition === void 0) { taskPosition = 0; }
    var tests = taskTests;
    if (tests && tests.length) {
        var tutorialConfig = tutorial.config;
        var output = parse_loaders_1.default(tests, tutorialConfig.testSuffix, tutorial, dir);
        var config = {
            dir: dir,
            tutorialDir: tutorialConfig.dir,
            taskPosition: taskPosition
        };
        tutorialConfig.run(output, config, handleResult);
    }
    return true;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = runTaskTests;
