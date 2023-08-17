const express = require("express");
const cors = require("cors");
const connectDB = require("./db/connectDB");
const app = express();
app.use(express.json());
app.use(cors());
const userRouter = require("./routes/userRoutes.js");
const postRouter = require("./routes/postRoutes.js");
const authRouter = require("./routes/authRoutes.js");
const {isAuthenticated} = require("./middleware/verifyJWT")

const PORT = process.env.PORT || 5000;
require("dotenv").config();

app.get("/", (req, res) => {
  res.status(200).json({ message: "server get request" });
});

app.use("/api/auth", authRouter);
app.use(isAuthenticated)
app.use("/api/user", userRouter);
app.use("/api/post", postRouter);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`server started on port : ${PORT}`);
    });
  } catch (err) {
    console.log(err.message);
  }
};

start();
