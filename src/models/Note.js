import {  Schema,model } from "mongoose";

const noteSchema = new  Schema({
    title: String,
    description: {
        type: String,
        require : true
    },
    author : String


},{
    timestamps:true
});

module.exports = model('Note',noteSchema);
