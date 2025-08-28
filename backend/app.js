const User = require("./models/User.js");
const express = require("express");
const mongoose = require("mongoose");
const MONGO_URL = 'mongodb://127.0.0.1:27017/ration';
const app = express();
const cors = require("cors");
app.use(cors());


app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));


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
    if(username != '' && password != '' && email != ''){
        let newUser = new User({
            username : username,
            password : password,
            email : email,
        });
        await newUser.save();
        res.json({
            "message" : "SignedUp",
        });
    }
});

app.post("/login",async (req,res) => {
    const {email,password} = req.body;
    console.log(email,password);
    const userIn = await User.find({
        "email" : email
    });

    if(userIn.length == 0){
        res.json({
            "message" : "Invalid email",
        })
    }

    if(userIn[0].password == password){
        res.json({
            "message" : "login"
        })
    }else{
        res.json({
            "message" : "Invalid password"
        })
    }
})

app.listen(8080,()=>{
    console.log("app is listing at port 8080");
});