import express from "express";
import validator from "../../utils/validator";
import {validationResult} from "express-validator";
import sharp from "sharp";
import path from "path";
import fs from "fs";

const img = express.Router();

img.get("/", validator, (req: express.Request, res: express.Response) => {
  // showing errors if query params isn't valid via validator middleware
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()});
  }

  const {filename, width, height} = req.query;
  const inputPath = path.resolve("src/images");
  const outputFile = `${path.resolve("src/images/cache")}/${filename}_${width}_${height}.jpg`;

  //checking if image is resized to the same dimensions before to use cache if true
  if (fs.existsSync(outputFile)) {
    res.sendFile(outputFile);
  } else {
    // resizing image using sharp module
    sharp(`${inputPath}/${filename}.jpg`)
      .resize(parseInt(width as string), parseInt(height as string))
      .toFile(outputFile)
      .then(() => {
        res.sendFile(outputFile);
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

export default img;
