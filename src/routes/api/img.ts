import express from "express";
import validator from "../../utils/validator";
import resizer from "../../utils/resizer";
import {validationResult} from "express-validator";

const img = express.Router();

img.get("/", validator, (req: express.Request, res: express.Response) => {
  // showing errors if query params isn't valid via validator middleware
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()});
  }
  // apply resizer fn to img
  resizer(req, res);
});

export default img;
