const express = require("express");
const userRouter = express.Router();
const { db } = require("./config");

userRouter.get("/", (req, res) => {
  res.json({
    message: "SUIIII",
  });
});

userRouter.get("/get-users", async (req, res) => {
  let sql = `SELECT * FROM USERS`;
  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "User lists retrieved successfully",
    });
  });
});

userRouter.get("/get-products", async (req, res) => {
  let sql = `SELECT * FROM PRODUCTS`;
  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "Product list retrieved successfully",
    });
  });
});

userRouter.delete("/post-products", async (req, res) => {
  var id = req.body.id;

  let sql = `DELETE FROM products WHERE id =${id}`;
  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "Product list edited successfully",
    });
  });
});

module.exports = {
  userRouter,
};
