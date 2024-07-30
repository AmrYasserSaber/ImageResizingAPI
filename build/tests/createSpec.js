"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var create_1 = require("../modules/create");
var fs_extra_1 = __importDefault(require("fs-extra"));
it('should create a folder', function () {
    (0, create_1.createFolder)(__dirname + '/temptest');
    expect(fs_extra_1.default.readdirSync("".concat(__dirname)).includes('temptest')).toBe(true);
});
it('should create a file', function () {
    (0, create_1.create)(__dirname + '/temptest/test.js');
    expect(fs_extra_1.default.readdirSync("".concat(__dirname, "/temptest")).includes('test.js')).toBe(true);
});
