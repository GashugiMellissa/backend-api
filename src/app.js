import express from "express";
import dotenv from "dotenv";
import Router from "./routes/index";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import mongoose from "mongoose";
dotenv.config();
const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

try {
  mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true }).then(()=>{
    console.log("the database is now connected")
  })
  app.use("/api/v1/", Router);

} catch (error) {
  console.log(error);
}

export default app;
