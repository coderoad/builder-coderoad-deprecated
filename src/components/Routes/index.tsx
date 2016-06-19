import * as React from 'react';
import {connect} from 'react-redux';
import {Page, Start, TutorialConfig, TutorialPublish} from '../index';

@connect(state => ({
  route: state.route,
}))
export default class Routes extends React.Component<{
  route?: string
}, {}> {
  render() {
    switch (this.props.route) {
      case 'page':
        return <Page />;
      case 'start':
        return <Start />;
      case 'config':
        return <TutorialConfig />;
      case 'publish':
        return <TutorialPublish />;

      // TODO
      // case 'tutorialPublish':
      //   return <TutorialPublish {...props} />;

      default:
        throw 'Error: Route not found.';
    }
  }
}
