import {  Schema,model } from "mongoose";

const userSchema = new Schema({
    userName : {
        type : String,
        required:true,
        unique : true
    },
    password : {
        type : String,
        required:true
    }
},{
    timestamps : true
});

module.exports = model('User', userSchema);