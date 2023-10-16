const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();
const port = process.env.PORT || 4000;
const db = require("./routes/index");

// app.use(
//   cors({
//     origin: "*",
//     credentials: true,
//     optionsSuccessStatus: 200,
//   })
// );

// app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`http://localhost:${port}/api/products`);
});

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//   );
//   res.header(
//     "Access-Control-Allow-Headers",
//     "x-access-token, Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.get("/api/products", (req, res) => {
  db.query("SELECT * FROM FOUNDS;", (err, data) => {
    if (!err) res.send({ product: data });
    else res.send(err);
  });
});
