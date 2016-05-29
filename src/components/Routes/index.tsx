import * as React from 'react';
import {Page, Progress, Tutorials, Start, FinalPage} from '../index';

export default class Routes extends React.Component<{
  route: string, page: CR.Page, tutorials: Tutorial.Info[],
  checks: CR.Checks, pagePosition: CR.PagePosition, tasks: CR.Task[],
  tutorial: CR.Tutorial
}, {}> {
  render() {
    switch (this.props.route) {
      case 'page':
        return <Page {...this.props} />;
      case 'start':
        return <Start {...this.props} />;
      case 'tutorials':
        return <Tutorials {...this.props} />;
      default:
        throw 'Error: Route not found.';
    }
  }
}
