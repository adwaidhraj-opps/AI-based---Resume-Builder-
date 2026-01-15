import express from "express";
import { getUserbyId, loginUser, registerUser } from "../controller/userController.js"
import protect from "../middlewares/authMiddleware.js"
import { getUserResumes } from "../controller/userController.js";

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/data', protect, getUserbyId);
userRouter.get('/resumes', protect, getUserResumes)
export default userRouter;