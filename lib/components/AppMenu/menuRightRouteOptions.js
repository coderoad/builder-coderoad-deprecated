"use strict";
var React = require('react');
var MenuLink_1 = require('./MenuLink');
var routes = [{
        route: 'tutorialConfig',
        name: 'config'
    }, {
        route: 'tutorialInfo',
        name: 'info'
    }, {
        route: 'page',
        name: 'edit'
    }];
function menuRightRouteOptions(route) {
    return routes.filter(function (r) { return route !== r.route; }).map(function (r) { return (React.createElement(MenuLink_1.default, {key: r.name, route: r.route, title: r.name})); });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = menuRightRouteOptions;
