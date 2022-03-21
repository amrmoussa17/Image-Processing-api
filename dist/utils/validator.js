"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_validator_1 = require("express-validator");
// validator middleware
var validator = [
    (0, express_validator_1.query)("filename").isIn(["encenadaport", "fjord", "icelandwaterfall", "palmtunnel", "santamonica"]),
    (0, express_validator_1.query)("width").isInt(),
    (0, express_validator_1.query)("height").isInt(),
];
exports.default = validator;
