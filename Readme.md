# this project was initialized using npm init -y

## added the following packages

-bcryptjs or you can use the crypto library installed in js
-express to setup routes and the base server
-cookie-parser to pass cookies from server to the browser as a response http only cookies for more security
-nodemon to restart our development envt
-morgan to log our endpoints as we send requests
-mongoose to enable data modelling and connect to the mongo database
-dotenv to access the env variables using process.env
--added another package (validator) to help with email validation

### controllers for the routes

<!-- auth -->

const register = async (req, res) => {
res.send("register");
};
const login = async (req, res) => {
res.send("login");
};
const update = async (req, res) => {
res.send("update");
};
const remove = async (req, res) => {
res.send("delete");
};
export { register, login, update, remove };

<!-- auth -->

<!-- wastes -->

const registerWaste = async (req, res) => {
res.send("register waste");
};
const updateWaste = async (req, res) => {
res.send("register waste");
};
const getAllWastes = async (req, res) => {
res.send("register waste");
};
const deleteWaste = async (req, res) => {
res.send("register waste");
};
export { registerWaste, updateWaste, getAllWastes, deleteWaste };

<!-- wastes -->

## created the skelleton for all the routes

<codeblock>

<!-- auth -->

import express from "express";
const router = express.Router();
import {
register,
login,
update,
remove,
} from "../Controllers/authController.js";

<!-- auth -->
<!-- wastes -->

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

<!-- wastes -->
<codeblock>

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/update:id").patch(update);
router.route("/delete:id").delete(remove);
export default router;

## api testing on postman

-setting up the routes in folders and the adding requests respectively

## json web tokens

for jwt secret i used all-keys generator

## hash passwords using bcrypt js

# auth controller content

```code snippet
-register a new user
  const { email, password, name } = req.body;
  if (!email || !password || !name) {
    throw new BAD_REQUEST("please provide all fields");
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new BAD_REQUEST("email is already in use");
  }
  const user = await User.create(req.body);
  const token = user.createJwt();
  const userClient = {
    name: user.name,
    email: user.email,
    location: user.location,
  };
  res.status(StatusCodes.CREATED).json({ userClient, token });

```
