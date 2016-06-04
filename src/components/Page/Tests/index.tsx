import * as React from 'react';


const Tests: React.StatelessComponent<{
  tests: string[], style: Object
}> = ({tests, style}) => (
  <div style={style}>
  {tests.map(test => <p>{test}</p>)}
  </div>
);
export default Tests;
