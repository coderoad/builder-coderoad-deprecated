"use strict";
var redux_1 = require('redux');
var redux_form_1 = require('redux-form');
var page_position_1 = require('./modules/page-position');
var setup_1 = require('./modules/setup');
var package_json_1 = require('./modules/package-json');
var tutorial_1 = require('./modules/tutorial');
var window_1 = require('./modules/window');
var validate_tutorial_1 = require('./modules/validate-tutorial');
var core_coderoad_1 = require('core-coderoad');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = redux_1.combineReducers({
    alert: core_coderoad_1.alertReducer, checks: setup_1.reducer, editor: core_coderoad_1.editorReducer, dir: core_coderoad_1.dirReducer,
    packageJson: package_json_1.reducer, pagePosition: page_position_1.reducer, route: core_coderoad_1.routeReducer,
    tutorial: tutorial_1.reducer, windowToggle: window_1.reducer, form: redux_form_1.reducer, validation: validate_tutorial_1.reducer,
});
