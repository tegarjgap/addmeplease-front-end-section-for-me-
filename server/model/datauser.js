'use strict';

const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let UserSchema = new Schema({
    email:{
    	type: String,
    	require: true,
 		trim: true
    },
    name:{
    	type: String,
    	require: true,
    	trim: true
    }, 
    pass:{
    	type: String,
    	required: true
    } 
});

const datauser = mongoose.model("datauser", UserSchema);
module.exports = datauser;