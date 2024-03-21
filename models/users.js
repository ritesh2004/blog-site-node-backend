import express from "express";
import mongoose from "mongoose";

//Creating schema
const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    name : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true,
        unique:true
    },
    password : {
        type:String,
        select:false
    },
    profileURL : {
        type : String
    },
    bio : {
        type : String,
        default : '-'
    },
    provider : {
        type : String,
        require : true
    },
    createdAt : {
        type: Date,
        default : Date.now
    }
})

//Creating collection
export const users = mongoose.model("BlogUser",userSchema)