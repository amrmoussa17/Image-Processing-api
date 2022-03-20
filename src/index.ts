import express from "express";
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

  // resizing image using sharp module
  sharp(__dirname + "/images/" + req.query.filename + ".jpg")
    .resize(parseInt(req.query.width as string), parseInt(req.query.height as string))
    .toFile(__dirname + "/images/cache/output.jpg")
    .then((info) => {
      res.sendFile(__dirname + "/images/cache/output.jpg");
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
