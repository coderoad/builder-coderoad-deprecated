"use strict";
var reducers_1 = require('./reducers');
var core_coderoad_1 = require('core-coderoad');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = core_coderoad_1.configureStore(reducers_1.default, false, { TUTORIAL_BUILD: 300 });
