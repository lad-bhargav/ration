const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GrocerySchema = new Schema({
    title : {
        type : String,
    },
    price : {
        type : Number,
    },
    unit : {
        type : String,
    },
    img : {
        type : String,
    },
    description : {
        type : String,
    },
    maindescription : {
        type : String,
    }
});

const Grocery = mongoose.model("Grocery",GrocerySchema);
module.exports = Grocery;