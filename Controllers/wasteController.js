import Waste from "../Models/Waste.js";
import { StatusCodes } from "http-status-codes";
import { BAD_REQUEST, Not_Found, Unauthenticated } from "../errors/index.js";
const registerWaste = async (req, res) => {
  const { name, type, condition } = req.body;
  if (!name || !type || !condition) {
    throw new BAD_REQUEST("please provide all fields");
  }
  const waste = await Waste.create({
    name,
    type,
    condition,
    createdBy: req.user,
  });
  res.status(StatusCodes.CREATED).json({ waste });
};
const updateWaste = async (req, res) => {
  // to update about the waste
  res.send("register waste");
};
const getAllWastes = async (req, res) => {
  res.send("register waste");
};
const deleteWaste = async (req, res) => {
  res.send("register waste");
};

export { registerWaste, updateWaste, getAllWastes, deleteWaste };
