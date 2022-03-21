import express from "express";
import img from "./api/img";

//creates routes router
const routes = express.Router();

// main path for routes
routes.get("/", (req, res) => {
  res.send("welcome to image processing api");
});

// mounting  api routes on routes
routes.use("/img", img);

export default routes;
