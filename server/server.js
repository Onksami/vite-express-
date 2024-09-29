const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));

const carsData = require("./carsData");

app.get("/api", (req, res) => {
  res.json({ cars: carsData });
});

app.listen(8080, () => {
  console.log("server is running on port 8080");
});
