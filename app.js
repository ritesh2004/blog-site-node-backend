import express from "express";
import userRouter from "./routes/users.js";
import blogRouter from "./routes/blogs.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/err.js";
import cors from 'cors';
import fs from 'fs';
import moment from "moment";

export const app = express();
config({
    path : "./data/.env"
})

app.use(express.json())
app.use(cookieParser())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin',process.env.FRONTEND_URL);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization,token');
    res.header('Access-Control-Allow-Credentials', 'true'); // Allow credentials
  
    // Handle preflight requests
    if (req.method === 'OPTIONS') {
      res.sendStatus(200);
    } else {
      next();
    }
  });

app.use(express.static('build'))

app.use("/api/v1/",userRouter)

app.use("/api/v1/",blogRouter)

app.use(errorMiddleware)

app.use((req,res,next)=>{
    const logEntry = {
        method : req.method,
        time : moment().format('YYYY-MM-DD HH:mm:ss'),
        apiAddress : req.url,
        ipAddress : req.ip
    }

    fs.appendFile('log.json',JSON.stringify(logEntry)+'\n',(err)=>{
        if (err) {
            console.error("Error writing to log file: ",err)
        }
    })
    next()
})