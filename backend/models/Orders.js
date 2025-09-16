const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrdersSchema = new Schema({
    email : {
        type : String,
    },
    item : {
        type : String,
    },
    price : {
        type : Number,
    },
    unit : {
        type : String,
    },
    address : {
        type : String,
    },
    Fplace : {
        type : String,
    },
    phNum : {
        type : Number,
    },
    mop : {
        type : String,
    }
});

const Orders = mongoose.model("Orders",OrdersSchema);
module.exports = Orders;