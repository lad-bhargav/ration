const User = require("./models/User.js");
const express = require("express");
const mongoose = require("mongoose");
const MONGO_URL = 'mongodb://127.0.0.1:27017/ration';
const app = express();

async function main(){
    await mongoose.connect(MONGO_URL);
}

main().then(()=>{
    console.log("connected to DB");
}).catch(e => console.log(e));

app.get("/",(req,res)=>{
    res.send("working");
});

app.post("/signup",async (req,res)=>{
    let {username , password , email} = req.body;
    let newUser = User({
        username : username,
        password : password,
        email : email,
    });
    console.log(newUser);
    await newUser.save();
    res.json({
        "message" : "SignedUp",
    });
})

app.listen(8080,()=>{
    console.log("app is listing at port 8080");
});