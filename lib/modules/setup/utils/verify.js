"use strict";
var check_system_1 = require('./check-system');
function allTrue(obj) {
    return Object.values(obj).every(function (x) { return x === true; });
}
function setupVerify(dir, packageJson) {
    var hasDir = !!dir;
    var checks = {
        system: {
            node: !!check_system_1.nodeMinVersion(),
            npm: !!check_system_1.npmMinVersion(),
            xcode: !!check_system_1.requiresXCode(),
        },
        setup: {
            hasDir: hasDir,
        }
    };
    checks.system.passed = allTrue(checks.system);
    checks.setup.passed = allTrue(checks.setup);
    checks.passed = checks.system.passed && checks.setup.passed;
    return checks;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = setupVerify;
