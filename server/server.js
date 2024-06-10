const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT;
const dbURI = process.env.dbURI;
const mongoose = require("mongoose");



const app = express();
app.use(cors());


const path = require("path");
app.use("/public", express.static(path.join(__dirname, "public")));

app.use(express.json());


app.get("/", (req, res) => {
  res.send("Welcome");
});




module.exports = {
  server: app,
  start: () => {
    mongoose
      .connect(dbURI)
      .then(() => {
        app.listen(PORT, () => {
          console.log(`Starting server on port ${PORT}`);
        });
      });
  },
};