export default function handleDependencies(pj, runner): Object {
  let deps = pj.dependencies || {};
  // remove all runners
  Object.keys(deps)
    .filter(key => key.match(/-coderoad$/))
    .forEach(key => delete deps[key]);

  // add runner
  if (!deps || !pj.dependencies.hasOwnProperty(runner)) {
    // add dependency
    const dep = {};
    dep[runner] = 'latest';
    deps = Object.assign({}, pj.dependencies, dep);
  }
  return deps;
}
