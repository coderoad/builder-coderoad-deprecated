/// <reference path="../node_modules/core-coderoad/src/typings/tsd.d.ts" />

declare namespace Builder {

  interface Checks {
    passed?: boolean;
    system: {
      passed?: boolean;
      node: boolean;
      npm: boolean;
      xcode: boolean;
    };
    setup: {
      passed?: boolean;
      hasDir: boolean;
    };
  }

  interface State {
    checks: Checks;
    route: string;
    pagePosition: CR.PagePosition;
    tutorial: CR.Tutorial;
    packageJson: PackageJson;
    windowToggle: boolean;
    alert: CR.Alert;
  }

  interface ActionObject {
    action: string;
    content: string;
    singleLine?: boolean;
  }
}
