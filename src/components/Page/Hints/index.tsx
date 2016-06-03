import * as React from 'react';

const Hints: React.StatelessComponent<{
  hints: string[]
}> = ({hints}) => (
  <div>
  {hints.map(hint => <p>{hint}</p>)}
  </div>
);
export default Hints;
