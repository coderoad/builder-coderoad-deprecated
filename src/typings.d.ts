/// <reference path="../node_modules/core-coderoad/src/typings/tsd.d.ts" />

interface BuilderChecks {
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
