const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();
const port = process.env.PORT || 4000;
const db = require("./routes/index");

app.listen(port, () => {
  console.log(`http://localhost:${port}/api/products`);
});

app.get("/api/products", (req, res) => {
  db.query("SELECT * FROM FOUNDS;", (err, data) => {
    if (!err) res.send({ product: data });
    else res.send(err);
  });
});
