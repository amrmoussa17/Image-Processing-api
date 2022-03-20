import express from "express";
import path from "path";
import sharp from "sharp";
import validator from "./utils/validator";
const { validationResult } = require("express-validator");

// make an app instance
const app = express();

// make image api endpoint
app.get("/img", validator, (req: express.Request, res: express.Response) => {
  // showing errors if query params isn't valid via validator middleware
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  let filename = req.query.filename as string;
  let width = req.query.width as string;
  let height = req.query.height as string;
  let inputPath = path.resolve("src/images");
  let outputPath = path.resolve("src/images/cache");

  // resizing image using sharp module
  sharp(`${inputPath}/${filename}.jpg`)
    .resize(parseInt(width), parseInt(height))
    .toFile(`${outputPath}/${filename}_${width}_${height}.jpg`)
    .then(() => {
      res.sendFile(`${outputPath}/${filename}_${width}_${height}.jpg`);
    })
    .catch((err) => {
      console.log(err);
    });
});

// configure port
const port = 3000;

// spin up server
app.listen(port, () => {
  console.log(`server started at port ${port}`);
});
