import * as React from 'react';

import MenuLink from './MenuLink';

const routes = [{
    route: 'config',
    name: 'config'
  }, {
    route: 'publish',
    name: 'publish'
  }, {
    route: 'page',
    name: 'edit'
  }];

export default function menuRightRouteOptions(route: string) {
  // return all routes in list except route provided
  return routes.filter(r => route !== r.route).map(r => (
    <MenuLink
      key={r.name}
      route={r.route}
      title={r.name}
    />
    )
  );
}
