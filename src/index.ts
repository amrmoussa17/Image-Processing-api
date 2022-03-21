import express from "express";
import routes from "./routes/index";

// make an app instance
const app = express();

// configure app routes
app.use("/", routes);

// configure port
const port = 3000;

// spin up server
app.listen(port, () => {
  console.log(`server started at port ${port}`);
});

export default app;
