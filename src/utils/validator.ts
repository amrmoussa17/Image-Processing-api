import {query} from "express-validator";

// validator middleware
const validator = [
  query("filename").isIn(["encenadaport", "fjord", "icelandwaterfall", "palmtunnel", "santamonica"]),
  query("width").isInt(),
  query("height").isInt(),
];

export default validator;
