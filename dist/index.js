"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/index"));
// make an app instance
var app = (0, express_1.default)();
// configure app routes
app.use("/", index_1.default);
// configure port
var port = 3000;
// spin up server
app.listen(port, function () {
    console.log("server started at port ".concat(port));
});
exports.default = app;
