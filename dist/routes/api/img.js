"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var validator_1 = __importDefault(require("../../utils/validator"));
var express_validator_1 = require("express-validator");
var sharp_1 = __importDefault(require("sharp"));
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var img = express_1.default.Router();
img.get("/", validator_1.default, function (req, res) {
    // showing errors if query params isn't valid via validator middleware
    var errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // apply resizer fn to img
    var _a = req.query, filename = _a.filename, width = _a.width, height = _a.height;
    var inputPath = path_1.default.resolve("src/images");
    var outputFile = "".concat(path_1.default.resolve("src/images/cache"), "/").concat(filename, "_").concat(width, "_").concat(height, ".jpg");
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
});
exports.default = img;
