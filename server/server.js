const express = require("express");
const cors = require("cors");
const connectDB = require("./db/connectDB");
const app = express();
app.use(express.json())
app.use(cors())
const userRouter = require("./routes/userRoutes.js");
const postRouter = require("./routes/postRoutes.js");
const profileRouter = require("./routes/profileRouter");
const PORT = process.env.PORT || 5000;
require("dotenv").config();

app.get("/",(req,res)=>{
    res.status(200).json({message : "server get request"});
})

app.use("/api/user",userRouter)
app.use("/api/post",postRouter)
app.use("/api/profile",profileRouter)

const start = async() =>{
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT,()=>{
            console.log(`server started on port : ${PORT}`);
        })
    }
    catch(err)
    {
        console.log(err.message);
    }
}

start();
