import express from "express";
import cors from "cors";
import "dotenv/config"
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import resumeRouter from "./routes/resumeRoutes.js";
import aiRouter from "./routes/aiRoutes.js";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 3000;


try{await mongoose.connect(process.env.MONGODB_URI) , console.log("DB connected")}

catch(err){console.log("error")}


app.use(express.json())
app.use(cors())

app.get('/', (req, res)=> res.send("Server is live..."))
app.use('/api/user', userRouter)
app.use('/api/resumes', resumeRouter)
app.use('/api/ai', aiRouter)

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})