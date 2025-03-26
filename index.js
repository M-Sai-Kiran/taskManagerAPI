import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.end("first get");
});

app.listen("4000", () => {
  console.log("server listening at http://localhost.com:4000");
});
