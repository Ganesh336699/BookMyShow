import express from "express";
import { getAllUsers , signUp, updateUser  ,removeUser , login , getBookingsOfUser, getUserById} from "../controllers/user-controller.js";



const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/signup", signUp);
userRouter.put("/:id" , updateUser);
userRouter.delete("/:id" , removeUser);
userRouter.post("/login" ,login);
userRouter.get("/bookings/:id", getBookingsOfUser);

export default userRouter;