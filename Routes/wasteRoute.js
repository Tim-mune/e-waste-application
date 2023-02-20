import express from "express";
const router = express.Router();
import {
  registerWaste,
  updateWaste,
  getAllWastes,
  deleteWaste,
} from "../Controllers/wasteController.js";
router.route("/waste").post(registerWaste);
router.route("/updatewaste").patch(updateWaste);
router.route("getwaste").get(getAllWastes);
router.route("deletewaste:id").delete(deleteWaste);
export default router;
