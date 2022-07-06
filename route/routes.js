import bodyParser from "body-parser";
import express from "express";
const router = express.Router();
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
import register from "../controller/registerController.js";
router.post("/", register);
export default router;
