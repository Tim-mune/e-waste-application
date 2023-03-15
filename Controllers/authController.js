import User from "../Models/User.js";
import { StatusCodes } from "http-status-codes";
import { BAD_REQUEST, Not_Found, Unauthenticated } from "../errors/index.js";
const register = async (req, res) => {
  // get input as email name and password for registration
  // they are all required in the user model
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
  const userClient = {
    name: user.name,
    email: user.email,
    location: user.location,
  };
  res.status(StatusCodes.CREATED).json({ userClient, token });
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
  // attachCookie({ res, token });

  res.status(StatusCodes.OK).json({ user, token });
};
const update = async (req, res) => {
  const { id } = req.params;
  const { name, password, location, email } = req.body;
  const user = await User.findOne({ _id: id });
  if (!user) {
    throw new Not_Found("invalid credentials");
  }
  if ((!name, !password, !location, !email)) {
    throw new BAD_REQUEST("please provide all values");
  }
  user.password = password;
  user.name = name;
  user.location = location;
  user.email = email;
  user.save();
  user.password = undefined;
  res.status(StatusCodes.OK).json(user);
};
const resetPassword = async (req, res) => {
  res.send("rest your email here");
};
const remove = async (req, res) => {
  const { id } = req.params;
  // check if user is present first
  const user = await User.findOne({ _id: id });
  if (!user) {
    throw new BAD_REQUEST("user does not exist");
  }
  console.log(user);
};
export { register, login, update, remove, resetPassword, confirmEmail };
