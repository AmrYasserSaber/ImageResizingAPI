"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cashing_1 = __importDefault(require("../modules/cashing"));
var fs_extra_1 = __importDefault(require("fs-extra"));
describe('test out the cashing proccess', function () {
    beforeEach(function () { return fs_extra_1.default.removeSync("./src/cash/thumbnails"); });
    it('creates thumbnails folder', function () {
        (0, cashing_1.default)("encenadaport", 500, 300);
        expect(fs_extra_1.default.readdirSync("".concat(__dirname, "/../../src/cash")).length).toBe(1);
    });
});
