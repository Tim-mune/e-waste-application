import User from "../Models/User.js";
import { StatusCodes } from "http-status-codes";
import { BAD_REQUEST, Not_Found, Unauthenticated } from "../errors/index.js";
import attachCookie from "../utils/attachCookie.js";
const register = async (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password || !name) {
    throw new BAD_REQUEST("please provide all fields");
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new BAD_REQUEST("email is already in use");
  }
  const isFirstAccount = (await User.countDocuments({})) < 4;
  const role = isFirstAccount ? "admin" : "user";
  const user = await User.create({ email, password, name, role });
  const token = user.createJwt();
  await attachCookie({ res, token });
  const userClient = {
    name: user.name,
    email: user.email,
    location: user.location,
  };
  res.status(StatusCodes.CREATED).json({ userClient });
};
// code to send confirmation
const confirmEmail = async (req, res) => {
  res.send("confirm your email");
};
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BAD_REQUEST("please provide all values");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new Not_Found("user does not exist");
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new BAD_REQUEST("invalid credentials");
  }
  user.password = undefined;
  const token = user.createJwt();
  await attachCookie({ res, token });

  res.status(StatusCodes.OK).json({ user });
};
const update = async (req, res) => {
  const id = req.user;
  const { name, password, location, email } = req.body;
  const user = await User.findOne({ _id: id }).select("-password");
  if (!user) {
    throw new Not_Found("invalid credentials");
  }
  if ((!name, !location, !email)) {
    throw new BAD_REQUEST("please provide all values");
  }
  user.name = name;
  user.password = password;
  user.location = location;
  user.email = email;
  user.save();
  res.status(StatusCodes.OK).json(user);
};
const resetPassword = async (req, res) => {
  res.send("rest your email here");
};
const remove = async (req, res) => {
  const id = req.user;
  const user = await User.findOne({ _id: id });
  if (!user) {
    throw new BAD_REQUEST("user does not exist");
  }

  res.json(user);
};
export { register, login, update, remove, resetPassword, confirmEmail };
