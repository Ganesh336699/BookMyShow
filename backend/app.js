import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./Routes/user-routes.js";
import adminRouter from "./Routes/admin-routes.js";
import movieRouter from "./Routes/movie-routes.js";
import bookingRouter from "./Routes/booking-routes.js";



dotenv.config();
const app = express();


//middlewares
app.use(cors());
app.use(express.json());
app.use("/user" , userRouter);
app.use("/admin",adminRouter);
app.use("/movie",movieRouter);
app.use("/booking",bookingRouter);

const PORT = process.env.PORT || 5000;

//connecting to database
mongoose
.connect(`mongodb+srv://koreganesh114:${process.env.MONGODB_PASSWORD}@moviebookingcluster.nekon.mongodb.net/`

).then(()=>app.listen(PORT, () => {
    console.log(`connected to DB and localhost port ${5000}`);
}
))
.catch((e)=> console.log(e));








//listening to port

