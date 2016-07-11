import * as React from 'react';

import Quit from './Quit';
import menuIconRight from './menuIconRight';
import menuRightRouteOptions from './menuRightRouteOptions';
import Divider from 'material-ui/Divider';
import IconMenu from 'material-ui/IconMenu';

const origin: __MaterialUI.propTypes.origin = {
  horizontal: 'right',
  vertical: 'top',
};

export default function menuRight(route: string) {
  return (
    <IconMenu
      iconButtonElement={menuIconRight()}
      targetOrigin={origin}
      anchorOrigin={origin}
    >
      {menuRightRouteOptions(route)}
      <Divider />
      <Quit key='quit'/>
    </IconMenu>
  );
}
