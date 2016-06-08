import * as React from 'react';
import {connect} from 'react-redux';
import {Page, Start, TutorialConfig, TutorialInfo} from '../index';

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
      case 'tutorialConfig':
        return <TutorialConfig />;
      case 'tutorialInfo':
        return <TutorialInfo />;

      // TODO
      // case 'tutorialPublish':
      //   return <TutorialPublish {...props} />;

      default:
        throw 'Error: Route not found.';
    }
  }
}
