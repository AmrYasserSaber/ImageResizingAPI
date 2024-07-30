"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger = function (req, res, 
// eslint-disable-next-line @typescript-eslint/ban-types
next) {
    // eslint-disable-next-line prefer-const
    var url = req.url;
    console.log("".concat(url, " was visited"));
    next();
};
exports.default = logger;
