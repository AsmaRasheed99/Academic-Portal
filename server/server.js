const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT;
const dbURI = process.env.dbURI;
const mongoose = require("mongoose");

const userRouts = require("./routes/userRoute");
const courseRouts = require("./routes/courseRoute");
const notFoundHandler = require("./middlewares/404");


const errorHandler = require("./middlewares/500");
const Protected = require("./middlewares/Protected");


const app = express();
app.use(express.json({ limit: '50mb' }));

app.use(cors());
app.use(userRouts)
app.use(courseRouts)
app.use(notFoundHandler);
app.use(errorHandler);
app.use(Protected);

const path = require("path");
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use('/videos', express.static(path.join(__dirname, 'public/videos')));



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