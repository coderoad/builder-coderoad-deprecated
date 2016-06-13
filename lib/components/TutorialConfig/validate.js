"use strict";
var debounce = require('lodash.debounce');
var validate = debounce(function (values) {
    var errors = {};
    var requiredFields = ['name', 'language', 'runner'];
    requiredFields.forEach(function (field) {
        if (!values[field]) {
            errors[field] = 'Required';
        }
    });
    if (values.name && !values.name.match(/^coderoad-[A-Za-z0-9\-]+$/)) {
        errors.name = 'Invalid "coderoad-*" name';
    }
    return errors;
}, 200);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = validate;
