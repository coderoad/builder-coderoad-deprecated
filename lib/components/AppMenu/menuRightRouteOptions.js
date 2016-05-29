"use strict";
var React = require('react');
var MenuLink_1 = require('./MenuLink');
function menuRightRouteOptions(route) {
    switch (route) {
        case 'final':
        case 'page':
        case 'progress':
            return React.createElement(MenuLink_1.default, {route: 'tutorials'});
        default:
            return null;
    }
    ;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = menuRightRouteOptions;
