"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./router/index"));
var app = (0, express_1.default)();
var port = 8000;
app.use('/api', index_1.default);
console.log("live on port ".concat(port));
exports.default = app;
