const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    name: String,
});

const Cart = mongoose.model("carts", cartSchema);
module.exports = Cart;