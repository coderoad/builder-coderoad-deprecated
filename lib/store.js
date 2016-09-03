"use strict";
var configureStore_1 = require('./options/configureStore');
var reducers_1 = require('./reducers');
var store = configureStore_1.default({
    reducer: reducers_1.default,
    devMode: false,
    throttle: { TUTORIAL_BUILD: 300 },
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = store;
