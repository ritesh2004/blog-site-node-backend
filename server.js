import { app } from "./app.js";
import connectDB from "./data/database.js";

connectDB()

app.get('/',(req,res)=>{
    res.send("Nice! Working")
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is working in ${process.env.NODE_ENV} mode at port: ${process.env.PORT}`)
})