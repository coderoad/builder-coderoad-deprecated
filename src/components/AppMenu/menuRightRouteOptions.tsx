import * as React from 'react';
import MenuLink from './MenuLink';

export default function menuRightRouteOptions(route: string) {
  switch (route) {
    case 'final':
    case 'page':
    case 'progress':
      return <MenuLink route='tutorials' />;
    default:
      return null;
  };
}
