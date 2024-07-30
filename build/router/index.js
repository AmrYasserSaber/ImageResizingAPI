"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var file_controller_1 = __importDefault(require("../controllers/file.controller"));
var loger_Middleware_1 = __importDefault(require("../Middleware/loger.Middleware"));
var routes = express_1.default.Router();
routes.get('/images', loger_Middleware_1.default, file_controller_1.default);
exports.default = routes;
