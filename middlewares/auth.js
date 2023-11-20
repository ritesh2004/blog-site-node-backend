import jwt from "jsonwebtoken"
import { users } from "../models/users.js"

export const isAuthenticated = async (req,res,next) => {
    const { token } = req.cookies;
    // console.log(token)
    if (!token) {
        return res.status(404).json({
            message:"Login first"
        })
    }
    const decoded = jwt.verify(token,process.env.TOKEN_SECRET)
    req.user = await users.findById(decoded._id)
    next()
}