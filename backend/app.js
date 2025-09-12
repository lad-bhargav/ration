const User = require("./models/User.js");
const Grocery = require("./models/Grocery.js");
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
            "message" : "login",
            "username" : userIn[0].username,
        })
    }else{
        res.json({
            "message" : "Invalid password"
        })
    }
});

// app.post("/ration",async(req,res)=>{
//     let grocery1 = new Grocery({
//         id : 1,
//         title : "Dal",
//         price : 123,
//         unit : "1kg",
//     });
//     await grocery1.save();
//     res.send("data is added");
// });

app.get("/ration",async(req,res)=>{
    try{
        const groceries = await Grocery.find({});
        res.json(groceries);
    }catch(err){
        res.status(500).json({error : err.message});
    }
});

app.post("/profile",async(req,res)=>{
    try{
        const {email} = req.body;
        const profile = await User.findOne({
            "email" : email,
        });
        res.json({
            "profile" : profile,
        })
    }catch(err){
        res.status(500).json({error : err.message});
    }
});

app.post("/profile/edit",async(req,res)=>{
    const {email,username,password,profilepic} = req.body;

    const user = await User.findOneAndUpdate({
        "email" : email,
    },{
        "username" : username,
        "password" : password,
        "profilepic" : profilepic,
    });

    res.json({
        "message" : "profile update successfully",
    })
});

app.get("/:id",async(req,res)=>{
    try{
        const {id} = req.params;
        const singleCard = await Grocery.findById(id);
        console.log(singleCard);
        res.json(singleCard);
    }catch(err){
        res.status(500).json({error : err.message});
    }
})

app.listen(8080,()=>{
    console.log("app is listing at port 8080");
});