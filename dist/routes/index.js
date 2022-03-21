"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var img_1 = __importDefault(require("./api/img"));
//creates routes router
var routes = express_1.default.Router();
// main path for routes
routes.get("/", function (req, res) {
    res.send("welcome to image processing api");
});
// mounting  api routes on routes
routes.use("/img", img_1.default);
exports.default = routes;
