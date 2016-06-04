import * as React from 'react';
import {Page, Start, TutorialConfig, TutorialInfo} from '../index';

export default class Routes extends React.Component<{
  route: string, checks: Builder.Checks, pagePosition: CR.PagePosition,
  tutorial: CR.Tutorial, packageJson: PackageJson
}, {}> {
  render() {
    switch (this.props.route) {
      case 'page':
        return <Page {...this.props} />;
      case 'start':
        return <Start {...this.props} />;
      case 'tutorialConfig':
        return <TutorialConfig {...this.props} />;
      case 'tutorialInfo':
        return <TutorialInfo {...this.props} />;

      // TODO
      // case 'tutorialPublish':
      //   return <TutorialPublish {...props} />;

      default:
        throw 'Error: Route not found.';
    }
  }
}
