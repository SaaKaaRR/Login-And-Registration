import userRoutes from "./route/routes.js";
import express from "express";
const app = express();
import bodyParser from "body-parser";
app.use(bodyParser.urlencoded({ extended: true }));
import mongoose from "mongoose";
import "dotenv/config";
import register from "./controller/registerController.js";
import User from "./model/UserDetail.js";

try {
  mongoose.connect(process.env.DB_URL, () => {
    app.listen(5000, () => {
      console.log("server running at 5000");
    });
  });
} catch (error) {
  console.log(err);
}

app.get("/login", (req, res) => {
  res.sendFile("C:/Users/sakar/Desktop/simple backend app node/login.html");
});

app.get("/register", (req, res) => {
  res.sendFile("C:/Users/sakar/Desktop/simple backend app node/register.html");
});

app.post("/", (req, res) => {
  const userDetail = req.body;
  console.log(userDetail);
});

app.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const loginResult = await User.findOne({ username: username }).exec();
  if (loginResult) {
    if (loginResult.password == password) {
      res.send("Login Successful");
    } else {
      res.send("Login Failed. Invalid Credentials");
    }
  } else {
    res.send("Login Failed. Invalid Credentials");
  }
});

app.use("/register", userRoutes);
