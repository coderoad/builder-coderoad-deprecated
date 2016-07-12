import * as React from 'react';
import {connect} from 'react-redux';

import {AppMenu, Page, Start, Test, TutorialConfig, TutorialPublish} from '../index';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/svg-icons/navigation/menu';
import {Route, Router} from 'react-router-sans-urls';

const styles = {
  drawer: {
    height: '100%',
    width: '100%',
    overflowY: 'scroll',
  },
};

@connect(state => ({
  windowToggle: state.windowToggle,
  route: state.route,
}))
export default class SidePanel extends React.Component<{
  windowToggle?: boolean, route?: string,
}, {}> {
  public render(): React.ReactElement<{}> {
    const {route, windowToggle} = this.props;
    return (
      <section>
        <Drawer
          width={400}
          openSecondary={true}
          open={windowToggle}
          style={styles.drawer}
        >
          <div className='cr-bg'>
            <AppMenu />
            <Router route={route}>
              <Route path='page' component={<Page />} />
              <Route path='start' component={<Start />} />
              <Route path='config' component={<TutorialConfig />} />
              <Route path='publish' component={<TutorialPublish />} />
              <Route path='test' component={<Test />} />
            </Router>
          </div>
        </Drawer>
    </section>
    );
  }
};
