const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GrocerySchema = new Schema({
    title : {
        type : String,
    },
    price : {
        type : Number,
    },
    quantity : {
        type : Number,
    },
    image : {
        type : String,
    }
});

const Grocery = mongoose.model("Grocery",GrocerySchema);