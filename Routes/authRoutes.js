import express from "express";
const router = express.Router();
import {
  register,
  login,
  update,
  remove,
} from "../Controllers/authController.js";

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/update/:id").patch(update);
router.route("/delete/:id").delete(remove);
export default router;
