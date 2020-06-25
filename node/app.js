const express = require("express");
const app = express();
const path = require("path");
const serveStatic = require("serve-static");

app.use(
  serveStatic(path.join(__dirname, "public"), {
    maxAge: "1d",
  })
);

app.get("/", (req, res) => {
  console.log("/ has been accessed");

  // res.setHeader("Cache-Control", "public, max-age=2592000");
  // res.setHeader("Expires", new Date(Date.now() + 2592000000).toUTCString());

  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/about", (req, res) => {
  console.log("About has been accessed");
  res.sendFile(path.join(__dirname + "/about.html"));
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
