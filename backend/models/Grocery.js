const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GrocerySchema = new Schema({
    id : {
        type : Number,
    },
    title : {
        type : String,
    },
    price : {
        type : Number,
    },
    unit : {
        type : String,
    },
    image : {
        type : String,
    }
});

const Grocery = mongoose.model("Grocery",GrocerySchema);
module.exports = Grocery;