const cookieParser = require("cookie-parser");
const express = require("express");

const app = express();
app.use(cookieParser());
app.set("view engine", "ejs");


app.get("/login", (req, res) => {
  res.cookie("username", "bob");
  res.send("You are logged in");
});
app.get("/regsiter", (req, res) => {
  res.cookie("u", "anna");
  res.send("regsiter");
});

app.get("/", (req, res) => {
  res.render("home");
  console.log("cookies", req.cookies);
  // if (!req.cookies.username) return res.send("You are not logged in");
  //   console.log("cookie", req.headers.cookie);
  //   const cookie = req.headers.cookie;
  //   const cookieArr = cookie.split("; ");
  //   console.log("arr", cookieArr);
  //   const cookieObj = {};
  //   cookieArr.forEach((cookieEl) => {
  //     cookieKeyVal = cookieEl.split("=");
  //     cookieObj[cookieKeyVal[0]] = cookieKeyVal[1];
  //   });
  //   console.log("parse", cookieObj);
  //   console.log("username", cookieObj["username"]);
  // res.send("You are logged in");
});

app.listen("3002", console.log("server running 3002"));
