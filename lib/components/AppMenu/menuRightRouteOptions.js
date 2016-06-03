"use strict";
var React = require('react');
var MenuLink_1 = require('./MenuLink');
var routes = [
    'tutorialConfig',
    'tutorialInfo',
    'page'
];
function menuRightRouteOptions(route) {
    return routes.filter(function (r) { return route !== r; }).map(function (r) { return React.createElement(MenuLink_1.default, {route: r}); });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = menuRightRouteOptions;
