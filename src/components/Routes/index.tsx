import * as React from 'react';
import {Page, Start, TutorialConfig, TutorialInfo} from '../index';
import Top from '../TopPanel/Top';

export default class Routes extends React.Component<{
  route: string, checks: CR.Checks, pagePosition: CR.PagePosition,
  tutorial: CR.Tutorial, packageJson: PackageJson
}, {}> {
  render() {
    switch (this.props.route) {
      case 'page':
        Top.toggle(false);
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
