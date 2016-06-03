import * as React from 'react';

const Tests: React.StatelessComponent<{
  tests: string[]
}> = ({tests}) => (
  <div>
  {tests.map(test => <p>{test}</p>)}
  </div>
);
export default Tests;
