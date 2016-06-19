"use strict";
var core_coderoad_1 = require('core-coderoad');
var validate = function (values) {
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
    if (values.language &&
        !values.runner && !core_coderoad_1.tutorialConfigOptions[values.language].runners.includes(values.runner)) {
        errors.runner = values.runner + " runner does not match language " + values.language;
    }
    return errors;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = validate;
