"use strict";
var redux_1 = require('redux');
var page_position_1 = require('./modules/page-position');
var setup_1 = require('./modules/setup');
var package_json_1 = require('./modules/package-json');
var tutorial_1 = require('./modules/tutorial');
var alert_1 = require('core-coderoad/lib/alert');
var editor_1 = require('core-coderoad/lib/editor');
var route_1 = require('core-coderoad/lib/route');
var window_1 = require('core-coderoad/lib/window');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = redux_1.combineReducers({
    alert: alert_1.reducer, checks: setup_1.reducer, editor: editor_1.reducer, dir: editor_1.dir,
    packageJson: package_json_1.reducer, pagePosition: page_position_1.reducer, route: route_1.reducer,
    tutorial: tutorial_1.reducer, windowToggle: window_1.reducer
});
