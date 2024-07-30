"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFile = exports.deleteFolderRecursive = exports.createFolder = exports.create = void 0;
var fs_extra_1 = __importDefault(require("fs-extra"));
var path_1 = __importDefault(require("path"));
var create = function (path) {
    try {
        return fs_extra_1.default.openSync(path, 'a+');
    }
    catch (error) {
        console.log(error);
    }
};
exports.create = create;
var createFolder = function (path) {
    if (!fs_extra_1.default.existsSync(path)) {
        try {
            return fs_extra_1.default.mkdirSync(path);
        }
        catch (error) {
            console.log(error);
        }
    }
};
exports.createFolder = createFolder;
var deleteFolderRecursive = function (directoryPath) {
    if (fs_extra_1.default.existsSync(directoryPath)) {
        fs_extra_1.default.readdirSync(directoryPath).forEach(function (file) {
            var curPath = path_1.default.join(directoryPath, file);
            if (fs_extra_1.default.lstatSync(curPath).isDirectory()) {
                // recurse
                deleteFolderRecursive(curPath);
            }
            else {
                // delete file
                fs_extra_1.default.unlinkSync(curPath);
            }
        });
        fs_extra_1.default.rmdirSync(directoryPath);
    }
};
exports.deleteFolderRecursive = deleteFolderRecursive;
var deleteFile = function (path) { return fs_extra_1.default.unlinkSync(path); };
exports.deleteFile = deleteFile;
