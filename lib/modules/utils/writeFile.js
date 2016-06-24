"use strict";
var path_1 = require('path');
var fs_1 = require('fs');
function writeFile(dir, file, content) {
    fs_1.writeFileSync(path_1.join(dir, file), content);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = writeFile;
