import Jwt from "jsonwebtoken";
import { Unauthenticated } from "../errors/index.js";
const auth = async (req, res, next) => {
  console.log(req.cookies.token);
  try {
    const token = req.cookies.token;
    const payload = Jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload.userId;
    next();
  } catch (error) {
    throw new Unauthenticated("authentication failed");
  }
};
export default auth;
