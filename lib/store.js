"use strict";
var reducers_1 = require('./reducers');
var core_coderoad_1 = require('core-coderoad');
var store = core_coderoad_1.configureStore({
    reducer: reducers_1.default,
    devMode: false,
    throttle: { TUTORIAL_BUILD: 300 },
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = store;
