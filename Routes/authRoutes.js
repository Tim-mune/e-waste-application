import express from "express";
import auth from "../middleware/auth.js";
const router = express.Router();
import {
  register,
  login,
  update,
  remove,
  confirmEmail,
  resetPassword,
} from "../Controllers/authController.js";

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/confirm-email").post(confirmEmail);
router.route("/reset-password").post(resetPassword);
router.route("/update").patch(auth, update);
router.route("/delete").delete(auth, remove);
export default router;
