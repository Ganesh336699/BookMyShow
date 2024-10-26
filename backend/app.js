import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import testModule from "./routes/test-module";

dotenv.config();
const app = express();

//middlewares
app.use(cors());
app.use(express.json());



//connecting to database
mongoose
.connect(`mongodb+srv://koreganesh114:${process.env.MONGODB_PASSWORD}@moviebookingcluster.nekon.mongodb.net/`

).then(()=>app.listen(5000, () => {
    console.log(`connected to DB and localhost port ${5000}`);
}
))
.catch((e)=> console.log(e));








//listening to port

