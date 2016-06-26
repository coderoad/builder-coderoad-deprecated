"use strict";
function handleDependencies(pj, runner) {
    if (!pj || !pj.dependencies) {
        pj.dependencies = {};
    }
    var deps = pj.dependencies;
    Object.keys(deps)
        .filter(function (key) { return key.match(/-coderoad$/); })
        .forEach(function (key) { return delete deps[key]; });
    if (!deps || !pj.dependencies.hasOwnProperty(runner)) {
        var dep = {};
        dep[runner] = 'latest';
        deps = Object.assign({}, pj.dependencies, dep);
    }
    return deps;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handleDependencies;
