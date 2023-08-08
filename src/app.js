const express = require("express");
const cors = require("cors");

const clientRouter = require("./routes/products.routes");
const repairRouter = require("./routes/products.routes");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1/clients", clientRouter);
app.use("/api/v1/repairs", repairRouter);

module.exports = app;
