import Waste from "../Models/Waste.js";
import { StatusCodes } from "http-status-codes";
import { BAD_REQUEST, Not_Found, Unauthenticated } from "../errors/index.js";
const registerWaste = async (req, res) => {
  const { name, type, condition, weight } = req.body;
  if (!name || !type || !condition || !weight) {
    throw new BAD_REQUEST("please provide all fields");
  }
  const waste = await Waste.create({
    name,
    type,
    condition,
    weight,
    createdBy: req.user,
  });
  res.status(StatusCodes.CREATED).json({ waste });
  // res.json({ msg: "it works" });
};
const updateWaste = async (req, res) => {
  const { id } = req.params;
  const { name, type, condition, weight, location, date } = req.body;
  // checks
  // if the user provided all fileds
  if (!name || !type || !condition || !weight || !location || !date) {
  }
  // if the waste exists
  const waste = await Waste.findOne({ _id: id });
  if (!waste) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "resources can not be found" });
  }
};
const getAllWastes = async (req, res) => {
  const wastes = await Waste.find({});
  if (!wastes) {
    res.status(StatusCodes.BAD_REQUEST).json({ msg: "no wastes found" });
  }
  res.status(StatusCodes.OK).json({ wastes });
};
const deleteWaste = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(StatusCodes.BAD_REQUEST).json({ msg: "please provide an id" });
  }
  const waste = await Waste.findOne({ _id: id });
  if (!waste) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "The waste you are trying to delete can not be found" });
  }
  await waste.remove();
  res.status(StatusCodes.OK).json({ msg: " waste was removed successfully" });
  res.send("delete waste");
};

export { registerWaste, updateWaste, getAllWastes, deleteWaste };
