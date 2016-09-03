"use strict";
var redux_1 = require('redux');
var redux_form_1 = require('redux-form');
var alert_1 = require('./modules/alert');
var dir_1 = require('./modules/dir');
var editor_1 = require('./modules/editor');
var package_json_1 = require('./modules/package-json');
var page_position_1 = require('./modules/page-position');
var result_1 = require('./modules/result');
var route_1 = require('./modules/route');
var runner_1 = require('./modules/runner');
var setup_1 = require('./modules/setup');
var tutorial_1 = require('./modules/tutorial');
var updated_1 = require('./modules/updated');
var validate_tutorial_1 = require('./modules/validate-tutorial');
var window_1 = require('./modules/window');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = redux_1.combineReducers({
    alert: alert_1.reducer, checks: setup_1.reducer, editor: editor_1.reducer, dir: dir_1.default, form: redux_form_1.reducer,
    packageJson: package_json_1.reducer, pagePosition: page_position_1.reducer, result: result_1.reducer, route: route_1.reducer,
    tutorial: tutorial_1.reducer, updated: updated_1.reducer, validation: validate_tutorial_1.reducer, windowToggle: window_1.reducer,
    runner: runner_1.reducer,
});
