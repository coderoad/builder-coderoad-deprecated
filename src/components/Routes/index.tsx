import * as React from 'react';
import {Page, Tutorials, Start, TutorialConfig, TutorialInfo} from '../index';

export default class Routes extends React.Component<{
  route: string, page: CR.Page, tutorials: Tutorial.Info[],
  checks: CR.Checks, pagePosition: CR.PagePosition, tasks: CR.Task[],
  tutorial: CR.Tutorial, tutorialConfig: Tutorial.ConfigSet,
  tutorialInfo: Tutorial.Info
}, {}> {
  render() {
    switch (this.props.route) {
      case 'page':
        return <Page {...this.props} />;
      case 'start':
        return <Start {...this.props} />;
      case 'tutorials':
        return <Tutorials {...this.props} />;
      case 'tutorialConfig':
        return <TutorialConfig {...this.props} />;
      case 'tutorialInfo':
        return <TutorialInfo {...this.props} />;
      default:
        throw 'Error: Route not found.';
    }
  }
}
