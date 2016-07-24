"use strict";
var validate = function (values) {
    var errors = {};
    var requiredFields = ['name', 'language', 'runnerItem'];
    requiredFields.forEach(function (field) {
        if (!values[field]) {
            errors[field] = 'Required';
        }
    });
    if (values.name && !values.name.match(/^coderoad-[A-Za-z0-9\-]+$/)) {
        errors.name = 'Invalid "coderoad-*" name';
    }
    if (values.repo) {
        if (!values.repo.match(/^https?:\/\/[a-zA-Z\-\.\/]+$/)) {
            errors.repo = 'Invalid http(s)://github.com/user/repo';
        }
    }
    return errors;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = validate;
