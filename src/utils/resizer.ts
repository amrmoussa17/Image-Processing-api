import express from "express";
import sharp from "sharp";
import path from "path";
import fs from "fs";

const resizer = (req: express.Request, res: express.Response) => {
  const filename = req.query.filename as string;
  const width = req.query.width as string;
  const height = req.query.height as string;
  const inputPath = path.resolve("src/images");
  const outputPath = path.resolve("src/images/cache");
  const outputFile = `${outputPath}/${filename}_${width}_${height}.jpg`;

  //checking if image is resized to the same dimensions before to use cache if true
  if (fs.existsSync(outputFile)) {
    res.sendFile(outputFile);
  } else {
    // resizing image using sharp module
    sharp(`${inputPath}/${filename}.jpg`)
      .resize(parseInt(width), parseInt(height))
      .toFile(outputFile)
      .then(() => {
        res.sendFile(outputFile);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export default resizer;
