import * as React from 'react';

const InstallGuide: React.StatelessComponent<{
  checks: BuilderChecks
}> = ({checks}) => {
  if (!checks || !checks.passed) {
    return null;
  }
  return (
    <div className='setup-guide'>Check the
      <a href='https://coderoad.github.io/docs#install'> <strong>Install Guide</strong></a>
    </div>
  );
};
export default InstallGuide;
