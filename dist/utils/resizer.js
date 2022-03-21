"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sharp_1 = __importDefault(require("sharp"));
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var resizer = function (req, res) {
    var filename = req.query.filename;
    var width = req.query.width;
    var height = req.query.height;
    var inputPath = path_1.default.resolve("src/images");
    var outputPath = path_1.default.resolve("src/images/cache");
    var outputFile = "".concat(outputPath, "/").concat(filename, "_").concat(width, "_").concat(height, ".jpg");
    //checking if image is resized to the same dimensions before to use cache if true
    if (fs_1.default.existsSync(outputFile)) {
        res.sendFile(outputFile);
    }
    else {
        // resizing image using sharp module
        (0, sharp_1.default)("".concat(inputPath, "/").concat(filename, ".jpg"))
            .resize(parseInt(width), parseInt(height))
            .toFile(outputFile)
            .then(function () {
            res.sendFile(outputFile);
        })
            .catch(function (err) {
            console.log(err);
        });
    }
};
exports.default = resizer;
