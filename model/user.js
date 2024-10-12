const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
// const { Schema } = mongoose;


// User schema
const userSchema = new mongoose.Schema({
    // "_id": ObjectId,
    "username": String,
    "email": String,
    "password": String, // This should be hashed
    "created_at": Date,
    "updated_at": Date
});


// User model
const User = mongoose.model('User', userSchema);


module.exports = User;