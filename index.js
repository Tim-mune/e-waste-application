import express from "express";
const app = express();
import "express-async-errors";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import connectDB from "./db/connect.js";
import authRoutes from "./Routes/authRoutes.js";
import wasteRoutes from "./Routes/wasteRoute.js";

// middleware import to handle error and not-found errors
import errorMiddleware from "./middleware/errorMiddleware.js";
import notFound from "./middleware/notFoundMiddleware.js";

// test route or home route
app.use(express.json());
app.use(cookieParser());

// routers

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/wastes", wasteRoutes);
app.use("/", (req, res) => {
  //   throw new Error("not found");
  res.send("home route");
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
