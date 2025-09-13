const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username : {
        type : String,
    },
    password : {
        type : String,
    },
    email : {
        type : String,
    },
    profilepic: {
        type : String,
    },
    cart : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Grocery",
        },
    ]
});

const User = mongoose.model("User",userSchema);

module.exports = User;