const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const userController = require("./Controllers/user.controller");
// const { register, login } = require("./Controllers/auth.controller");
// const authenticate = require("./Middlewares/authenticate");

app.get("", (req, res) => {
  try {
    res.send("users");
  } catch (error) {
    res.send(error);
  }
});

app.use("/users", userController);

module.exports = app;
