import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { router } from "./Routes/AuthRoute.js";
import cookieParser from "cookie-parser";

const app = express();

dotenv.config();

const port = process.env.PORT || 3001;

app.listen(port , () => {
    console.log("app Started");
} )

app.use(express.json());
app.use(express.urlencoded({extended: true}))

const DB_URL = process.env.DB_URL;

async function main() {
    await mongoose.connect(DB_URL)
}

main()
.then(() => {
    console.log("Connected to Database")
})
.catch((e) => {
    console.log("Error: " + e)
})

app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:5173"],   // <-- Frontend URL here
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/", router);