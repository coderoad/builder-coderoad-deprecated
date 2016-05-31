import {npmMinVersion, nodeMinVersion, requiresXCode} from './check-system';

function allTrue(obj: Object): boolean {
  return Object.values(obj).every(x => x === true);
}

export default function setupVerify(
  dir: string, packageJson: PackageJson
): CR.Checks {
  const hasDir = !!dir;

  let checks: CR.Checks = {
    system: {
      node: !!nodeMinVersion(),
      npm: !!npmMinVersion(),
      xcode: !!requiresXCode(),
    },
    setup: {
      hasDir,
    }
  };

  checks.system.passed = allTrue(checks.system);
  checks.setup.passed = allTrue(checks.setup);
  checks.passed = checks.system.passed && checks.setup.passed;
  return checks;
}
