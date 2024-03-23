import express from "express";
import mongoose from "mongoose";

//Creating schema
const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : [true,"username must be unique"],
        unique : true
    },
    name : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:[true,"email id must be unique"],
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
    }
},{timestamps : true})

//Creating collection
export const users = mongoose.model("BlogUser",userSchema)