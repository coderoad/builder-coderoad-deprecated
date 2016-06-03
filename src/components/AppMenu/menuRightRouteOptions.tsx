import * as React from 'react';
import MenuLink from './MenuLink';

const routes = [
  'tutorialConfig',
  'tutorialInfo',
  'page'
];

// return all routes in list except route provided
export default function menuRightRouteOptions(route: string) {
  return routes.filter(r => route !== r).map(r => <MenuLink route={r} />);
}
