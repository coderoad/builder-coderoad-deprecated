import * as React from 'react';

import {DynamicStepper} from '../../index';
import StepCheck from './StepCheck';
import VerifyButton from './VerifyButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
// import {openDirectory} from '../../../reducers/checks/action-setup';

const SetupChecks: React.StatelessComponent<{
  checks: Builder.Checks
}> = ({checks}) => {
  const {setup} = checks;
  if (setup.passed) {
    return null;
  }
  const {hasDir} = setup;
  const status = [hasDir];
  return (
  <Card className='cr-check'>
    <CardHeader
      title='Setup Checks'
      subtitle='CodeRoad requires a brief setup'
    />
    <CardText>
      <DynamicStepper status={status}>
        <StepCheck
          label='open a directory'
          completed={hasDir}
        >
          <p>File -> Open (a new folder)</p><br />
          <FlatButton
            label='Open Directory'
            secondary={true}
            /* onTouchTap={openDirectory} */
          />
        </StepCheck>
      </DynamicStepper>
    </CardText>
    <CardActions>
      <VerifyButton />
    </CardActions>
  </Card>
  );
};
export default SetupChecks;
