"use strict";
var debounce = require('lodash.debounce');
var validate = debounce(function (values) {
    var errors = {};
    var requiredFields = ['description', 'version'];
    requiredFields.forEach(function (field) {
        if (!values[field]) {
            errors[field] = 'Required';
        }
    });
    if (!values.version || !values.version.match(/^(\d+\.)?(\d+\.)?(\*|\d+)$/)) {
        errors.version = 'Invalid version number';
    }
    return errors;
}, 200);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = validate;
