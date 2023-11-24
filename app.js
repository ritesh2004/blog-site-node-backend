import express from "express";
import userRouter from "./routes/users.js";
import blogRouter from "./routes/blogs.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/err.js";
import cors from 'cors';

export const app = express();
config({
    path : "./data/.env"
})

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin : [process.env.FRONTEND_URL,"http://localhost:3000/"],
    methods : ["GET","POST","PUT","DELETE"],
    credentials : true
}))

app.use("/api/v1/",userRouter)

app.use("/api/v1/",blogRouter)

app.use(errorMiddleware)