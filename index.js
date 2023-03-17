import express from "express";
const app = express();
import "express-async-errors";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import connectDB from "./db/connect.js";
import authRoutes from "./Routes/authRoutes.js";
import wasteRoutes from "./Routes/wasteRoute.js";
import cors from "cors";

// middleware import to handle error and not-found errors
import errorMiddleware from "./middleware/errorMiddleware.js";
import notFound from "./middleware/notFoundMiddleware.js";

// test route or home route
// import auth middleware
import auth from "./middleware/auth.js";
// app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(morgan("tiny"));

// // routers
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/wastes", auth, wasteRoutes);
app.get("/api", (req, res) => {
  //   throw new Error("not found");
  res.json({ msg: "hello" });
});
// middleware
app.use(errorMiddleware);
app.use(notFound);
const port = 3000 || process.env.PORT;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await app.listen(port, () =>
      console.log(`server is up on http://localhost:${port}`)
    );
  } catch (error) {
    console.log(error);
  }
};
start();
