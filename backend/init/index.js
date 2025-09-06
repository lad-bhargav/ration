const mongoose = require("mongoose");
const Indata = require('./data.js');
const Grocery = require("../models/Grocery.js");
const MONGO_URL = 'mongodb://127.0.0.1:27017/ration';

async function main(){
    await mongoose.connect(MONGO_URL);
}

main().then(()=>{
    console.log("connected to DB");
}).catch(e => console.log(e));

const initDB = async() => {
    await Grocery.deleteMany({});
    await Grocery.insertMany(Indata.data);
    console.log("data is inited");
}

initDB();