import User from "../model/UserDetail.js";
import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const register = (req, res) => {
  const user = req.body;
  console.log(user);
  const newUser = new User(user);
  try {
    newUser.save();
    res.json("user saved");
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};
export default register;
