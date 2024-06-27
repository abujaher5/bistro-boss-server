const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 9000;

//middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Boss Is Running");
});
app.listen(port, () => {
  console.log(`Bistro Boss In Running on port${port}`);
});
