import Waste from "../Models/Waste.js";
import { StatusCodes } from "http-status-codes";
import moment from "moment";
import { BAD_REQUEST, Not_Found, Unauthenticated } from "../errors/index.js";
import mongoose from "mongoose";
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
  let result = Waste.find({});
  if (!result) {
    res.status(StatusCodes.BAD_REQUEST).json({ msg: "no wastes found" });
  }
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  result = result.skip(skip).limit(limit);
  const totalWastes = await Waste.countDocuments({});
  const numPages = Math.ceil(totalWastes / limit);
  const wastes = await result;
  res.status(StatusCodes.OK).json({ wastes, totalWastes, numPages });
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
const showStats = async (req, res) => {
  let stats = await Waste.aggregate([
    { $match: { createdBy: mongoose.Types.ObjectId(req.user) } },
    { $group: { _id: "$disposalStatus", count: { $sum: 1 } } },
  ]);
  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});
  let wastesPerMonth = await Waste.aggregate([
    { $match: { createdBy: mongoose.Types.ObjectId(req.user) } },
    {
      $group: {
        _id: { year: { $year: "$createdAt" }, month: { $month: "$createdAt" } },
        count: { $sum: 1 },
      },
    },
    { $sort: { "_id.year": -1, "_id.month": -1 } },
    { $limit: 8 },
  ]);
  let monthlyWastes = wastesPerMonth.map((item) => {
    const {
      _id: { year, month },
      count,
    } = item;
    const date = moment()
      .month(month - 1)
      .year(year)
      .format("MMM Y");
    return { date, count };
  });
  res.status(StatusCodes.OK).json({ stats, monthlyWastes });
};

export { registerWaste, updateWaste, getAllWastes, deleteWaste, showStats };
